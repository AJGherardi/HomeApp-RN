import { fetchQuery, graphql } from 'relay-runtime';
import { useHost } from './Enveriment';
import { ListGroupsQueryResponse, ListGroupsQuery } from './__generated__/ListGroupsQuery.graphql';

const query = graphql`
  query ListGroupsQuery {
    listGroups {
      name
      addr
    }
  }
`;

const variables = {};

async function listGroups(host: string): Promise<ListGroupsQueryResponse> {
    return await fetchQuery<ListGroupsQuery>(useHost(host), query, variables)
}

export { listGroups };

