import { onRpcRequest } from '..';
import snapMock from '../mocks/snap.mock';
import input from '../mocks/input.mock';
import output from '../mocks/output.mock';
import * as secp from '@noble/secp256k1';
import { sha256 } from '@noble/hashes/sha256';

describe('OnRPCRequest', () => {
  it('getKey for Invalid Chain ID', async () => {
    (global as any).snap = snapMock.success;
    await expect(onRpcRequest(input.failure.getKey)).rejects.toThrow(
      output.failure.invalidChainId,
    );
  });

  it('getKey for Valid Chain ID', async () => {
    (global as any).snap = snapMock.success;
    const resp: any = await onRpcRequest(input.success.getKey);

    expect(resp).toMatchObject(output.success.getKey);
  });

  it('invalid method', async () => {
    (global as any).snap = snapMock.success;

    await expect(onRpcRequest(input.failure.invalidMethod)).rejects.toThrow(
      output.failure.invalidMethod,
    );
  });

  it.skip('signDirect', async () => {
    (global as any).snap = snapMock.success;
    const resp: any = await onRpcRequest(input.success.signDirect);
    expect(resp.signed).toMatchObject(output.success.signDirect.signed);
    expect(resp.signature.pub_key).toStrictEqual(
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
    expect(resp.signature.pub_key).toStrictEqual(
      output.success.signDirect.signature.pub_key,
    );
    expect(resp.signature).toHaveProperty('signature');
  });


  it('signDirect', async () => {
    (global as any).snap = snapMock.success;
    const resp: any = await onRpcRequest(input.success.signArbitrary);
    console.log(resp)
    const params = input.success.signArbitrary.request.params as unknown as any
    console.log(sha256(params.signDoc));
    const msgHash =  Buffer.from(sha256(params.signDoc));

    const valid = secp.verify(
      Buffer.from(resp.signed).toString('hex'),
      msgHash.toString('hex'),
      Buffer.from(resp.signature.pub_key).toString('hex')
    );
    expect(resp.signed).toMatchObject(output.success.signDirect.signed);
    expect(resp.signature.pub_key).toStrictEqual(
      output.success.signDirect.signature.pub_key,
    );
    expect(resp.signature).toHaveProperty('signature');
  });

});
