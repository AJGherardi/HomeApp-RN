/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ResetDeviceMutationVariables = {
    addr: string;
};
export type ResetDeviceMutationResponse = {
    readonly resetDevice: boolean;
};
export type ResetDeviceMutation = {
    readonly response: ResetDeviceMutationResponse;
    readonly variables: ResetDeviceMutationVariables;
};



/*
mutation ResetDeviceMutation(
  $addr: String!
) {
  resetDevice(addr: $addr)
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
    "kind": "ScalarField",
    "name": "resetDevice",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ResetDeviceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ResetDeviceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ResetDeviceMutation",
    "operationKind": "mutation",
    "text": "mutation ResetDeviceMutation(\n  $addr: String!\n) {\n  resetDevice(addr: $addr)\n}\n"
  }
};
})();
(node as any).hash = 'c6fcbeb28708467264e6e254900e0234';
export default node;
