import { fetchQuery, graphql } from 'relay-runtime';
import { useHost } from './Enveriment';
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

async function listDevices(host: string): Promise<ListDevicesQueryResponse> {
    return await fetchQuery<ListDevicesQuery>(useHost(host), query, variables)
}

export { listDevices };

