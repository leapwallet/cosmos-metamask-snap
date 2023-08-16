import { onRpcRequest } from '..';
import snapMock from '../mocks/snap.mock';
import input from '../mocks/input.mock';
import output from '../mocks/output.mock';

it('getKey for Invalid Chain ID', async () => {
  if (input.failure.getKey.request) {
    await expect(onRpcRequest(input.failure.getKey)).rejects.toThrow(
      output.failure.invalidChainId,
    );
  }
});

it('getKey for Valid Chain ID', async () => {
  (global as any).snap = snapMock.success;
  await expect(onRpcRequest(input.success.getKey)).resolves.toMatchObject(
    output.success.getKey,
  );
});

it('invalid method', async () => {
  (global as any).snap = snapMock.success;
  await expect(onRpcRequest(input.failure.invalidMethod)).rejects.toThrow(
    output.failure.invalidMethod,
  );
});

it('signDirect', async () => {
  (global as any).snap = snapMock.success;
  const resp: any = await onRpcRequest(input.success.signDirect);
  expect(resp.signed).toMatchObject(output.success.signDirect.signed);
  expect(resp.signature.pub_key).toEqual(
    output.success.signDirect.signature.pub_key,
  );
  expect(resp.signature).toHaveProperty('signature');
});

/**
 * TODO: SignAmino throwing error on signature, need to validate before adding tests
 */

it.skip('signAmino', async () => {
  (global as any).snap = snapMock.success;
  const resp: any = await onRpcRequest(input.success.signAmino);
  expect(resp.signed).toMatchObject(output.success.signDirect.signed);
  expect(resp.signature.pub_key).toEqual(
    output.success.signDirect.signature.pub_key,
  );
  expect(resp.signature).toHaveProperty('signature');
});
