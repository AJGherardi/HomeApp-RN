/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type GetStateQueryVariables = {
    devAddr: string;
    elemNumber: number;
};
export type GetStateQueryResponse = {
    readonly getState: {
        readonly state: string;
        readonly stateType: string;
    };
};
export type GetStateQuery = {
    readonly response: GetStateQueryResponse;
    readonly variables: GetStateQueryVariables;
};



/*
query GetStateQuery(
  $devAddr: String!
  $elemNumber: Int!
) {
  getState(devAddr: $devAddr, elemNumber: $elemNumber) {
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
      }
    ],
    "concreteType": "State",
    "kind": "LinkedField",
    "name": "getState",
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
    "name": "GetStateQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetStateQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "GetStateQuery",
    "operationKind": "query",
    "text": "query GetStateQuery(\n  $devAddr: String!\n  $elemNumber: Int!\n) {\n  getState(devAddr: $devAddr, elemNumber: $elemNumber) {\n    state\n    stateType\n  }\n}\n"
  }
};
})();
(node as any).hash = '74fc5771f0608b5715a1295cd7551024';
export default node;
