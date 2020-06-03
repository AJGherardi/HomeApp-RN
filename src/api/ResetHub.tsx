import { graphql, commitMutation } from 'react-relay';
import { useHost, useHostAndKey } from "./Enveriment";
import { ResetHubMutation } from './__generated__/ResetHubMutation.graphql';
import { channel, put, take } from '@paybase/csp';

const mutation = graphql`
  mutation ResetHubMutation {
    resetHub
  }
`;

async function resetHub(host: string, webKey: string): Promise<boolean> {
    // Use a channel
    const responseChannel = channel<boolean>();
    // Make commit mutation callable from this function 
    function commit() {
        return commitMutation<ResetHubMutation>(
            useHostAndKey(host, webKey),
            {
                mutation,
                variables: {
                },
                onCompleted: (response, errors) => {
                    put(responseChannel, response.resetHub);
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

export { resetHub };
