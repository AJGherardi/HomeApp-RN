import { graphql, commitMutation } from 'react-relay';
import { useHostAndKey } from "./Enveriment";
import { channel, put, take } from '@paybase/csp';
import { RemoveGroupMutationResponse, RemoveGroupMutation } from './__generated__/RemoveGroupMutation.graphql';

const mutation = graphql`
  mutation RemoveGroupMutation($addr: String!) {
    removeGroup(addr: $addr) {
        addr
    }
  }
`;

async function removeGroup(
    host: string,
    webKey: string,
    addr: string
): Promise<RemoveGroupMutationResponse> {
    // Use a channel
    const responseChannel = channel<RemoveGroupMutationResponse>();
    // Make vars
    const variables = {
        addr,
    };
    // Make commit mutation callable from this function 
    function commit() {
        return commitMutation<RemoveGroupMutation>(
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

export { removeGroup };
