import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { RequestParams } from '../../index';
import parser, { getMessageDetails } from '../../helpers/parser';
import input from '../../mocks/helpers/input.mock';
import output from '../../mocks/helpers/output.mock';

test('Parser - Staking', async () => {
    const params = input.success.stake.request.params as unknown as RequestParams<SignDoc>
    expect(parser.parse(params.signDoc, input.success.stake.origin)).toMatchObject(output.success.stake);
});

test('Parser - UnStaking', async () => {
    const params = input.success.unStake.request.params as unknown as RequestParams<SignDoc>
    expect(parser.parse(params.signDoc, input.success.unStake.origin)).toMatchObject(output.success.unStake);
});

test('Parser - Redelegate', async () => {
    const params = input.success.redelegate.request.params as unknown as RequestParams<SignDoc>
    expect(parser.parse(params.signDoc, input.success.redelegate.origin)).toMatchObject(output.success.redelegate);
});

test('Parser - Send', async () => {
    const params = input.success.send.request.params as unknown as RequestParams<SignDoc>
    expect(parser.parse(params.signDoc, input.success.send.origin)).toMatchObject(output.success.send);
});

test('Parser - IBC Send', async () => {
    const params = input.success.IBCSend.request.params as unknown as RequestParams<SignDoc>
    expect(parser.parse(params.signDoc, input.success.IBCSend.origin)).toMatchObject(output.success.IBCSend);
});
  