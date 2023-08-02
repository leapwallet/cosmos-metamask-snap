import { Json, JsonRpcRequest } from "@metamask/snaps-types";


const output = {
    success: {
        getKey: {
            origin: 'test_mock',
            request: {
                id: "some_unique_id",
                jsonrpc: "2.0",
                method: 'getKey',
                params: {
                  chainId: 'cosmoshub-4',
                },
              } as unknown as JsonRpcRequest<Json[] | Record<string, Json>>
        }
    },
    failure: {
        getKey: {
            origin: 'test_mock',
            request: {
                id: "some_unique_id",
                jsonrpc: "2.0",
                method: 'getKey',
                params: {
                  chainId: 'cosmos',
                },
              } as unknown as JsonRpcRequest<Json[] | Record<string, Json>>
        }
    }
}

export default output;