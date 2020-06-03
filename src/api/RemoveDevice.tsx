import { graphql, commitMutation } from 'react-relay';
import { useHostAndKey } from "./Enveriment";
import { channel, put, take } from '@paybase/csp';
import { RemoveDeviceMutationResponse, RemoveDeviceMutation } from './__generated__/RemoveDeviceMutation.graphql';

const mutation = graphql`
  mutation RemoveDeviceMutation($addr: String!) {
    removeDevice(addr: $addr) {
        addr
    }
  }
`;

async function removeDevice(
    host: string,
    webKey: string,
    addr: string
): Promise<RemoveDeviceMutationResponse> {
    // Use a channel
    const responseChannel = channel<RemoveDeviceMutationResponse>();
    // Make vars
    const variables = {
        addr,
    };
    // Make commit mutation callable from this function 
    function commit() {
        return commitMutation<RemoveDeviceMutation>(
            useHostAndKey(host, webKey),
            {
                mutation,
                variables,
                onCompleted: (response, errors) => {
                    put(responseChannel, response);
                },
                onError: (error) => {
                    console.log(error)
                }
            }
        )
    }
    // Call commit
    commit();
    // Wait for the response
    var msg = await take(responseChannel);
    return msg
}

export { removeDevice };
