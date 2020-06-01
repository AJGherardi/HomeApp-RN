import { graphql, commitMutation } from 'react-relay';
import { useHost } from "./Enveriment";
import { channel, put, take } from '@paybase/csp';
import { AddDeviceMutationResponse, AddDeviceMutation } from './__generated__/AddDeviceMutation.graphql';

const mutation = graphql`
  mutation AddDeviceMutation($name: String!, $devAddr: String!, $addr: String!) {
    addDevice(name: $name, devAddr: $devAddr, addr: $addr) {
      name
      addr
    }
  }
`;

async function addDevice(
    host: string,
    name: string,
    devAddr: string,
    addr: string
): Promise<AddDeviceMutationResponse> {
    // Use a channel
    const responseChannel = channel<AddDeviceMutationResponse>();
    // Make vars
    const variables = {
        name,
        devAddr,
        addr,
    };
    // Make commit mutation callable from this function 
    function commit() {
        return commitMutation<AddDeviceMutation>(
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

export { addDevice };
