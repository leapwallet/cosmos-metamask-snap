import { text, heading } from '@metamask/snaps-ui';
import { MessageParser } from '@leapwallet/parser-parfait';
import { DirectSignDocDecoder } from '@leapwallet/buffer-boba';

const messageParser = new MessageParser();

const parser = {
  parse(signDoc: any) {
    const bodyBytes = new Uint8Array(Object.values(signDoc.bodyBytes));
    const authInfoBytes = new Uint8Array(Object.values(signDoc.authInfoBytes));
    const docDecoder = new DirectSignDocDecoder({
      ...{ ...signDoc, bodyBytes, authInfoBytes },
      accountNumber: signDoc.accountNumber,
    });
    const decoderString = JSON.stringify(docDecoder);
    const dec = JSON.parse(decoderString);

    const panels: any = [];

    dec.txBody.messages.forEach((msg: any) => {
      let txType = 'Transaction';
      if (msg.from_address && msg.to_address) {
        if (
          msg.amount &&
          msg.amount[0] &&
          msg.amount[0].denom &&
          msg.amount[0].amount
        ) {
          txType = `Sending ${msg.amount[0].amount} ${msg.amount[0].denom}`;
        } else {
          txType = 'Sending Token';
        }
      }

      if (msg.delegator_address && msg.validator_address) {
        if (msg.amount && msg.amount.denom && msg.amount.amount) {
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

    panels.push(heading('Raw Message'));
    panels.push(text(`${JSON.stringify(dec.txBody, null, 2)}`));
    return panels;
  },
};

export default parser;
