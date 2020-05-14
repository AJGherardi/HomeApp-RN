import { fetchQuery, graphql } from 'relay-runtime';
import { GetProvDataQuery, GetProvDataQueryResponse } from './__generated__/GetProvDataQuery.graphql';
import { useHost } from './Enveriment';

const query = graphql`
  query GetProvDataQuery {
    getProvData {
      flags
      ivIndex
      keyIndex
      networkKey
      nextDevAddr
    }  
  }
`;

const variables = {};

async function getProvData(): Promise<GetProvDataQueryResponse> {
  return await fetchQuery<GetProvDataQuery>(useHost(""), query, variables)
}

export default { getProvData };

