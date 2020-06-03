import { fetchQuery, graphql } from 'relay-runtime';
import { useHostAndKey } from './Enveriment';
import { AvailableDevicesQueryResponse, AvailableDevicesQuery } from './__generated__/AvailableDevicesQuery.graphql';

const query = graphql`
  query AvailableDevicesQuery {
    availableDevices
  }
`;

const variables = {};

async function availableDevices(host: string, webKey: string): Promise<AvailableDevicesQueryResponse> {
  return await fetchQuery<AvailableDevicesQuery>(useHostAndKey(host, webKey), query, variables)
}

export { availableDevices };

