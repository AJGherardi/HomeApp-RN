/* tslint:disable */
/* eslint-disable */
/* @relayHash 6c9bd1d7315609b61803ca6384a8e564 */

import { ConcreteRequest } from "relay-runtime";
export type ConfigHubMutationVariables = {};
export type ConfigHubMutationResponse = {
    readonly configHub: string;
};
export type ConfigHubMutation = {
    readonly response: ConfigHubMutationResponse;
    readonly variables: ConfigHubMutationVariables;
};



/*
mutation ConfigHubMutation {
  configHub
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "configHub",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ConfigHubMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ConfigHubMutation",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "ConfigHubMutation",
    "id": null,
    "text": "mutation ConfigHubMutation {\n  configHub\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '4b1481b0fcc005e5e66465e69e45898f';
export default node;
