import { graphql, commitMutation } from 'react-relay';
import { useHost } from "./Enveriment";
import { ConfigHubMutation } from './__generated__/ConfigHubMutation.graphql';

const mutation = graphql`
  mutation ConfigHubMutation {
    configHub
  }
`;

function configHub(host: string) {
  return commitMutation<ConfigHubMutation>(
    useHost(host),
    {
      mutation,
      variables: {
      },
      onCompleted: (response, errors) => {
        console.log(response.configHub)
      }
    }
  );
}

export default { configHub };
