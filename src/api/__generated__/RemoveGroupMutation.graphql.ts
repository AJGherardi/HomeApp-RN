/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type RemoveGroupMutationVariables = {
    addr: string;
};
export type RemoveGroupMutationResponse = {
    readonly removeGroup: {
        readonly addr: string;
    };
};
export type RemoveGroupMutation = {
    readonly response: RemoveGroupMutationResponse;
    readonly variables: RemoveGroupMutationVariables;
};



/*
mutation RemoveGroupMutation(
  $addr: String!
) {
  removeGroup(addr: $addr) {
    addr
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "addr",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "addr",
        "variableName": "addr"
      }
    ],
    "concreteType": "Group",
    "kind": "LinkedField",
    "name": "removeGroup",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "addr",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RemoveGroupMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RemoveGroupMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "RemoveGroupMutation",
    "operationKind": "mutation",
    "text": "mutation RemoveGroupMutation(\n  $addr: String!\n) {\n  removeGroup(addr: $addr) {\n    addr\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ad66b7996172cd8c4f6fda3be557b7a1';
export default node;
