import { graphql, commitMutation } from 'react-relay';
import { useHostAndKey } from "./Enveriment";
import { channel, put, take } from '@paybase/csp';
import { AddGroupMutation, AddGroupMutationResponse } from './__generated__/AddGroupMutation.graphql';

const mutation = graphql`
  mutation AddGroupMutation($name: String!) {
    addGroup(name: $name) {
      name
      addr
    }
  }
`;

async function addGroup(host: string, webKey: string, name: string): Promise<AddGroupMutationResponse> {
    // Use a channel
    const responseChannel = channel<AddGroupMutationResponse>();
    // Make vars
    const variables = {
        name,
    };
    // Make commit mutation callable from this function 
    function commit() {
        return commitMutation<AddGroupMutation>(
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

export { addGroup };
