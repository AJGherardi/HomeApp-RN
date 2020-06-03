import { fetchQuery, graphql } from 'relay-runtime';
import { useHostAndKey } from './Enveriment';
import { ListDevicesByGroupQueryResponse, ListDevicesByGroupQuery } from './__generated__/ListDevicesByGroupQuery.graphql';

const query = graphql`
  query ListDevicesByGroupQuery($addr: String!) {
    listDevicesByGroup(addr: $addr){
      name
      addr
      type
    }
  }
`;


async function listDevicesByGroup(host: string, webKey: string, addr: string): Promise<ListDevicesByGroupQueryResponse> {
  const variables = {
    addr
  };
  return await fetchQuery<ListDevicesByGroupQuery>(useHostAndKey(host, webKey), query, variables)
}

export { listDevicesByGroup };

