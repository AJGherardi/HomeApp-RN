/* tslint:disable */
/* eslint-disable */
/* @relayHash 7e147318ea5d3942854fc6f1588dbe64 */

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
    "kind": "LinkedField",
    "alias": null,
    "name": "getProvData",
    "storageKey": null,
    "args": null,
    "concreteType": "ProvData",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "flags",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "ivIndex",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "keyIndex",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "networkKey",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "nextDevAddr",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "GetProvDataQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "GetProvDataQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "GetProvDataQuery",
    "id": null,
    "text": "query GetProvDataQuery {\n  getProvData {\n    flags\n    ivIndex\n    keyIndex\n    networkKey\n    nextDevAddr\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'e412954e82d29f81d253db2f3fdb3702';
export default node;
