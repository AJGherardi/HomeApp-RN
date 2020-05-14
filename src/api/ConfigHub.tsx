import { graphql, commitMutation } from 'react-relay';
import { useHost } from "./Enveriment";
import { ConfigHubMutation } from './__generated__/ConfigHubMutation.graphql';
import { channel, put, take } from '@paybase/csp';

const mutation = graphql`
  mutation ConfigHubMutation {
    configHub
  }
`;

async function configHub(host: string): Promise<string> {
  // Use a channel
  const responseChannel = channel<string>();
  // Make commit mutation callable from this function 
  function commit() {
    return commitMutation<ConfigHubMutation>(
      useHost(host),
      {
        mutation,
        variables: {
        },
        onCompleted: (response, errors) => {
          put(responseChannel, response.configHub);
        }
      }
    )
  }
  // Call commit
  commit();
  // Wait for the response
  var msg: string = await take(responseChannel);
  return msg
}




export default { configHub };
