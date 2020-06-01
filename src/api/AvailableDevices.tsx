import { fetchQuery, graphql } from 'relay-runtime';
import { useHost } from './Enveriment';
import { AvailableDevicesQueryResponse, AvailableDevicesQuery } from './__generated__/AvailableDevicesQuery.graphql';

const query = graphql`
  query AvailableDevicesQuery {
    availableDevices
  }
`;

const variables = {};

async function availableDevices(host: string): Promise<AvailableDevicesQueryResponse> {
  return await fetchQuery<AvailableDevicesQuery>(useHost(host), query, variables)
}

export { availableDevices };

