/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ResetHubMutationVariables = {};
export type ResetHubMutationResponse = {
    readonly resetHub: boolean;
};
export type ResetHubMutation = {
    readonly response: ResetHubMutationResponse;
    readonly variables: ResetHubMutationVariables;
};



/*
mutation ResetHubMutation {
  resetHub
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "resetHub",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ResetHubMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ResetHubMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ResetHubMutation",
    "operationKind": "mutation",
    "text": "mutation ResetHubMutation {\n  resetHub\n}\n"
  }
};
})();
(node as any).hash = '1000797cd81cbab179605753226303c2';
export default node;
