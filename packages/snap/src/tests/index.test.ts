import onRPCRequest from '../index';
import snapMock from '../mocks/snap.mock';
import input from '../mocks/input.mock';
import output from '../mocks/output.mock';
import { JsonRpcRequest, OnRpcRequestHandler } from '@metamask/snaps-types';

test('GetKey for Invalid Chain ID', async () => {
  if(input.failure.getKey.request) {
    await expect(onRPCRequest(input.failure.getKey)).rejects.toThrow('Invalid chainId');
  }
  
});

test('GetKey for Valid Chain ID', async () => {
  (global as any).snap = snapMock.success;
  await expect(onRPCRequest(input.success.getKey)).resolves.toMatchObject(output.success.getKey)
});