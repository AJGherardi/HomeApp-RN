import { graphql, commitMutation } from 'react-relay';
import { useHost } from "./Enveriment";
import { channel, put, take } from '@paybase/csp';
import { ResetDeviceMutationResponse, ResetDeviceMutation } from './__generated__/ResetDeviceMutation.graphql';

const mutation = graphql`
  mutation ResetDeviceMutation($addr: String!) {
    resetDevice(addr: $addr) 
  }
`;

async function resetDevice(
    host: string,
    addr: string
): Promise<ResetDeviceMutationResponse> {
    // Use a channel
    const responseChannel = channel<ResetDeviceMutationResponse>();
    // Make vars
    const variables = {
        addr,
    };
    // Make commit mutation callable from this function 
    function commit() {
        return commitMutation<ResetDeviceMutation>(
            useHost(host),
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

export { resetDevice };
