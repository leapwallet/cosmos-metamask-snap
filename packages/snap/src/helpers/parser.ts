import { text, heading } from '@metamask/snaps-ui';
import {
  MessageParser,
  parfait,
  ParsedMessageType,
} from '@leapwallet/parser-parfait';
import {
  convertObjectCasingFromCamelToSnake,
  DirectSignDocDecoder,
  UnknownMessage,
} from '@leapwallet/buffer-boba';

const messageParser = new MessageParser();

const parser = {
  parse(signDoc: any, origin: string) {
    const bodyBytes = new Uint8Array(Object.values(signDoc.bodyBytes));
    const authInfoBytes = new Uint8Array(Object.values(signDoc.authInfoBytes));
    const docDecoder = new DirectSignDocDecoder({
      ...{ ...signDoc, bodyBytes, authInfoBytes },
      accountNumber: signDoc.accountNumber,
    });
    const decoderString = JSON.stringify(docDecoder);
    const dec = JSON.parse(decoderString);

    const parsedMessages = docDecoder.txMsgs.map((msg) => {
      if (msg instanceof UnknownMessage) {
        const raw = msg.toJSON();
        return {
          raw,
          parsed: {
            __type: ParsedMessageType.Unimplemented,
            message: {
              '@type': raw.type_url,
              body: raw.value,
            },
          } as parfait.unimplemented,
        };
      }

      const convertedMsg = convertObjectCasingFromCamelToSnake(
        (msg as unknown as { value: any }).value,
      );

      return {
        raw: {
          '@type': msg.typeUrl,
          ...convertedMsg,
        },
        parsed: messageParser.parse({
          '@type': msg.typeUrl,
          ...convertedMsg,
        }),
      };
    });

    const panels: any = [heading('Approve Transaction from'), text(origin)];

    dec.txBody.messages.forEach((msg: any) => {
      let txType = 'Transaction';
      if (msg.from_address && msg.to_address) {
        if (msg?.amount?.[0]?.denom && msg?.amount?.[0]?.amount) {
          txType = `Sending ${msg.amount[0].amount} ${msg.amount[0].denom}`;
        } else {
          txType = 'Sending Token';
        }
      }

      if (msg.delegator_address && msg.validator_address) {
        if (msg?.amount?.denom && msg?.amount?.amount) {
          txType = `Staking ${msg.amount.amount} ${msg.amount.denom}`;
        } else {
          txType = 'Staking Token';
        }
      }
      panels.push(heading(`${txType}`));
      msg.from_address && panels.push(text(` **From** _${msg.from_address}_`));
      msg.to_address && panels.push(text(` **To** _${msg.to_address}_`));
      msg.delegator_address &&
        panels.push(text(` **From** _${msg.delegator_address}_`));

      msg.validator_address &&
        panels.push(text(` **Validator** _${msg.validator_address}_`));
    });

    if (parsedMessages) {
      panels.push(heading('Raw Message'));
      panels.push(text(`${JSON.stringify(parsedMessages, null, 2)}`));
    }

    panels.push(heading('Raw Message'));
    panels.push(text(`${JSON.stringify(dec.txBody, null, 2)}`));
    return panels;
  },
};

export default parser;
