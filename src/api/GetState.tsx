import { fetchQuery, graphql } from 'relay-runtime';
import { useHostAndKey } from './Enveriment';
import { GetStateQueryResponse, GetStateQuery } from './__generated__/GetStateQuery.graphql';

const query = graphql`
  query GetStateQuery($devAddr: String!, $elemNumber: Int!) {
    getState(devAddr: $devAddr, elemNumber: $elemNumber) {
      state
      stateType
    }
  }
`;

async function getState(host: string, webKey: string, devAddr: string, elemNumber: number): Promise<GetStateQueryResponse> {
  const variables = {
    devAddr,
    elemNumber,
  };
  return await fetchQuery<GetStateQuery>(useHostAndKey(host, webKey), query, variables)
}

export { getState };

