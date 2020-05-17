/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AddGroupMutationVariables = {
    name: string;
};
export type AddGroupMutationResponse = {
    readonly addGroup: {
        readonly name: string;
        readonly addr: string;
    };
};
export type AddGroupMutation = {
    readonly response: AddGroupMutationResponse;
    readonly variables: AddGroupMutationVariables;
};



/*
mutation AddGroupMutation(
  $name: String!
) {
  addGroup(name: $name) {
    name
    addr
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "Group",
    "kind": "LinkedField",
    "name": "addGroup",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
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
    "name": "AddGroupMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddGroupMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AddGroupMutation",
    "operationKind": "mutation",
    "text": "mutation AddGroupMutation(\n  $name: String!\n) {\n  addGroup(name: $name) {\n    name\n    addr\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cfdd5c0ced4decc9f6971953ca33df74';
export default node;
