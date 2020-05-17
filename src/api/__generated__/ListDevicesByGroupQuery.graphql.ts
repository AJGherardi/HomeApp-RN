/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ListDevicesByGroupQueryVariables = {
    addr: string;
};
export type ListDevicesByGroupQueryResponse = {
    readonly listDevicesByGroup: ReadonlyArray<{
        readonly name: string;
        readonly addr: string;
        readonly type: string;
    }>;
};
export type ListDevicesByGroupQuery = {
    readonly response: ListDevicesByGroupQueryResponse;
    readonly variables: ListDevicesByGroupQueryVariables;
};



/*
query ListDevicesByGroupQuery(
  $addr: String!
) {
  listDevicesByGroup(addr: $addr) {
    name
    addr
    type
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
    "concreteType": "Device",
    "kind": "LinkedField",
    "name": "listDevicesByGroup",
    "plural": true,
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
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
    "name": "ListDevicesByGroupQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ListDevicesByGroupQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ListDevicesByGroupQuery",
    "operationKind": "query",
    "text": "query ListDevicesByGroupQuery(\n  $addr: String!\n) {\n  listDevicesByGroup(addr: $addr) {\n    name\n    addr\n    type\n  }\n}\n"
  }
};
})();
(node as any).hash = '8760ff71feb8867f0c0fcdbf088fb583';
export default node;
