import {
  Environment,
  Network,
  RecordSource,
  Store,
  Variables,
} from 'relay-runtime';

function makeNetwork(host: string, webKey: string) {
  return function fetchQuery(
    operation: any,
    variables: Variables
  ) {
    var variables: Variables = { webKey: webKey, ...variables }
    return fetch('http://' + host + ':8080/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then(response => {
      return response.json();
    });
  }
}

export function useHost(host: string) {
  return new Environment({
    network: Network.create(makeNetwork(host, "")),
    store: new Store(new RecordSource()),
  });
}

export function useHostAndKey(host: string, webKey: string) {
  return new Environment({
    network: Network.create(makeNetwork(host, webKey)),
    store: new Store(new RecordSource()),
  });
}