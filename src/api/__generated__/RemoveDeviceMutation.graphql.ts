/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type RemoveDeviceMutationVariables = {
    addr: string;
};
export type RemoveDeviceMutationResponse = {
    readonly removeDevice: boolean;
};
export type RemoveDeviceMutation = {
    readonly response: RemoveDeviceMutationResponse;
    readonly variables: RemoveDeviceMutationVariables;
};



/*
mutation RemoveDeviceMutation(
  $addr: String!
) {
  removeDevice(addr: $addr)
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
    "name": "removeDevice",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RemoveDeviceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RemoveDeviceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "RemoveDeviceMutation",
    "operationKind": "mutation",
    "text": "mutation RemoveDeviceMutation(\n  $addr: String!\n) {\n  removeDevice(addr: $addr)\n}\n"
  }
};
})();
(node as any).hash = 'dc89d5af013d1ebce379dd261d4f5da9';
export default node;
