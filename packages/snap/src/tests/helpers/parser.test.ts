import { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { RequestParams } from '../..';
import parser, { getMessageDetails } from '../../helpers/parser';
import input from '../../mocks/helpers/input.mock';
import output from '../../mocks/helpers/output.mock';

it('parser - Staking', async () => {
  const params = input.success.stake.request
    .params as unknown as RequestParams<SignDoc>;
  expect(
    parser.parse(params.signDoc, input.success.stake.origin),
  ).toMatchObject(output.success.stake);
});

it('parser - UnStaking', async () => {
  const params = input.success.unStake.request
    .params as unknown as RequestParams<SignDoc>;
  expect(
    parser.parse(params.signDoc, input.success.unStake.origin),
  ).toMatchObject(output.success.unStake);
});

it('parser - Redelegate', async () => {
  const params = input.success.redelegate.request
    .params as unknown as RequestParams<SignDoc>;
  expect(
    parser.parse(params.signDoc, input.success.redelegate.origin),
  ).toMatchObject(output.success.redelegate);
});

it('parser - Send', async () => {
  const params = input.success.send.request
    .params as unknown as RequestParams<SignDoc>;
  expect(parser.parse(params.signDoc, input.success.send.origin)).toMatchObject(
    output.success.send,
  );
});

it('parser - IBC Send', async () => {
  const params = input.success.IBCSend.request
    .params as unknown as RequestParams<SignDoc>;
  expect(
    parser.parse(params.signDoc, input.success.IBCSend.origin),
  ).toMatchObject(output.success.IBCSend);
});
