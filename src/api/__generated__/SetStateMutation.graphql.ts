/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type SetStateMutationVariables = {
    devAddr: string;
    elemNumber: number;
    value: string;
};
export type SetStateMutationResponse = {
    readonly setState: {
        readonly state: unknown;
        readonly stateType: string;
    };
};
export type SetStateMutation = {
    readonly response: SetStateMutationResponse;
    readonly variables: SetStateMutationVariables;
};



/*
mutation SetStateMutation(
  $devAddr: String!
  $elemNumber: Int!
  $value: String!
) {
  setState(devAddr: $devAddr, elemNumber: $elemNumber, value: $value) {
    state
    stateType
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "devAddr",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "elemNumber",
    "type": "Int!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "value",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "devAddr",
        "variableName": "devAddr"
      },
      {
        "kind": "Variable",
        "name": "elemNumber",
        "variableName": "elemNumber"
      },
      {
        "kind": "Variable",
        "name": "value",
        "variableName": "value"
      }
    ],
    "concreteType": "State",
    "kind": "LinkedField",
    "name": "setState",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "state",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "stateType",
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
    "name": "SetStateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SetStateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SetStateMutation",
    "operationKind": "mutation",
    "text": "mutation SetStateMutation(\n  $devAddr: String!\n  $elemNumber: Int!\n  $value: String!\n) {\n  setState(devAddr: $devAddr, elemNumber: $elemNumber, value: $value) {\n    state\n    stateType\n  }\n}\n"
  }
};
})();
(node as any).hash = '4a1e51edcbf39137e35bbd5a6a5d372e';
export default node;
