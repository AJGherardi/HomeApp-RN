/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type GetProvDataQueryVariables = {};
export type GetProvDataQueryResponse = {
    readonly getProvData: {
        readonly flags: string;
        readonly ivIndex: string;
        readonly keyIndex: string;
        readonly networkKey: string;
        readonly nextDevAddr: string;
    };
};
export type GetProvDataQuery = {
    readonly response: GetProvDataQueryResponse;
    readonly variables: GetProvDataQueryVariables;
};



/*
query GetProvDataQuery {
  getProvData {
    flags
    ivIndex
    keyIndex
    networkKey
    nextDevAddr
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ProvData",
    "kind": "LinkedField",
    "name": "getProvData",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "flags",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ivIndex",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "keyIndex",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "networkKey",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "nextDevAddr",
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
    "name": "GetProvDataQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetProvDataQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "GetProvDataQuery",
    "operationKind": "query",
    "text": "query GetProvDataQuery {\n  getProvData {\n    flags\n    ivIndex\n    keyIndex\n    networkKey\n    nextDevAddr\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e412954e82d29f81d253db2f3fdb3702';
export default node;
