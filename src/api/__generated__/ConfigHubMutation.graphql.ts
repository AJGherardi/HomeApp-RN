/* tslint:disable */
/* eslint-disable */

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
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "configHub",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ConfigHubMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ConfigHubMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ConfigHubMutation",
    "operationKind": "mutation",
    "text": "mutation ConfigHubMutation {\n  configHub\n}\n"
  }
};
})();
(node as any).hash = '4b1481b0fcc005e5e66465e69e45898f';
export default node;
