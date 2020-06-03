import { fetchQuery, graphql } from 'relay-runtime';
import { useHostAndKey } from './Enveriment';
import { ListDevicesQueryResponse, ListDevicesQuery } from './__generated__/ListDevicesQuery.graphql';

const query = graphql`
  query ListDevicesQuery {
    listDevices {
      name
      addr
      type
    }
  }
`;

const variables = {};

async function listDevices(host: string, webKey: string): Promise<ListDevicesQueryResponse> {
  return await fetchQuery<ListDevicesQuery>(useHostAndKey(host, webKey), query, variables)
}

export { listDevices };

