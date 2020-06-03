import { fetchQuery, graphql } from 'relay-runtime';
import { useHostAndKey } from './Enveriment';
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

async function listGroups(host: string, webKey: string): Promise<ListGroupsQueryResponse> {
  return await fetchQuery<ListGroupsQuery>(useHostAndKey(host, webKey), query, variables)
}

export { listGroups };

