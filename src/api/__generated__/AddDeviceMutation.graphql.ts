/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AddDeviceMutationVariables = {
    name: string;
    devAddr: string;
    addr: string;
};
export type AddDeviceMutationResponse = {
    readonly addDevice: {
        readonly name: string;
        readonly addr: string;
    };
};
export type AddDeviceMutation = {
    readonly response: AddDeviceMutationResponse;
    readonly variables: AddDeviceMutationVariables;
};



/*
mutation AddDeviceMutation(
  $name: String!
  $devAddr: String!
  $addr: String!
) {
  addDevice(name: $name, devAddr: $devAddr, addr: $addr) {
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
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "devAddr",
    "type": "String!"
  },
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
      },
      {
        "kind": "Variable",
        "name": "devAddr",
        "variableName": "devAddr"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "Device",
    "kind": "LinkedField",
    "name": "addDevice",
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
    "name": "AddDeviceMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddDeviceMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AddDeviceMutation",
    "operationKind": "mutation",
    "text": "mutation AddDeviceMutation(\n  $name: String!\n  $devAddr: String!\n  $addr: String!\n) {\n  addDevice(name: $name, devAddr: $devAddr, addr: $addr) {\n    name\n    addr\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b2496a7e14549e635c604806ddb3dccc';
export default node;
