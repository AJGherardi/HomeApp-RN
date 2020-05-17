import { graphql, commitMutation } from 'react-relay';
import { useHost } from "./Enveriment";
import { channel, put, take } from '@paybase/csp';
import { SetStateMutation, SetStateMutationResponse } from './__generated__/SetStateMutation.graphql';

const mutation = graphql`
  mutation SetStateMutation($devAddr: String!, $elemNumber: Int!, $value: String!) {
    setState(devAddr: $devAddr, elemNumber: $elemNumber, value: $value) {
      state
      stateType
    }
  }
`;

async function setState(host: string, devAddr: string, elemNumber: number, value: string): Promise<SetStateMutationResponse> {
    // Use a channel
    const responseChannel = channel<SetStateMutationResponse>();
    // Use Vars
    const variables = {
        devAddr,
        elemNumber,
        value,
    };
    // Make commit mutation callable from this function 
    function commit() {
        return commitMutation<SetStateMutation>(
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

export { setState };