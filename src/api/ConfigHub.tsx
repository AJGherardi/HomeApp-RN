import { graphql, commitMutation } from 'react-relay';
import environment from "./Enveriment";
import { ConfigHubMutation } from './__generated__/ConfigHubMutation.graphql';

const mutation = graphql`
  mutation ConfigHubMutation {
    configHub
  }
`;

function configHub() {
  return commitMutation<ConfigHubMutation>(
    environment,
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
