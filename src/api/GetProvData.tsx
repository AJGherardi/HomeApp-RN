import { fetchQuery, graphql } from 'relay-runtime';
import environment from "./Enveriment";
import { GetProvDataQuery, GetProvDataQueryResponse } from './__generated__/GetProvDataQuery.graphql';

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
  return await fetchQuery<GetProvDataQuery>(environment, query, variables)
}

export default { getProvData };

