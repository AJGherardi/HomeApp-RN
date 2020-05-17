/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ListDevicesQueryVariables = {};
export type ListDevicesQueryResponse = {
    readonly listDevices: ReadonlyArray<{
        readonly name: string;
        readonly addr: string;
        readonly type: string;
    }>;
};
export type ListDevicesQuery = {
    readonly response: ListDevicesQueryResponse;
    readonly variables: ListDevicesQueryVariables;
};



/*
query ListDevicesQuery {
  listDevices {
    name
    addr
    type
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Device",
    "kind": "LinkedField",
    "name": "listDevices",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ListDevicesQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ListDevicesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ListDevicesQuery",
    "operationKind": "query",
    "text": "query ListDevicesQuery {\n  listDevices {\n    name\n    addr\n    type\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b6ed37bf25cf1155ab3d7ca3f7ec91c0';
export default node;
