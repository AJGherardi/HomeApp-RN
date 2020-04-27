/* tslint:disable */
/* eslint-disable */
/* @relayHash 11553c5be2f8fa5470ceeb7d19eca1f5 */

import { ConcreteRequest } from "relay-runtime";
export type AddDeviceQueryVariables = {};
export type AddDeviceQueryResponse = {
    readonly getProvData: {
        readonly networkKey: unknown;
    };
};
export type AddDeviceQuery = {
    readonly response: AddDeviceQueryResponse;
    readonly variables: AddDeviceQueryVariables;
};



/*
query AddDeviceQuery {
  getProvData {
    networkKey
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
        "name": "networkKey",
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
    "name": "AddDeviceQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddDeviceQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AddDeviceQuery",
    "id": null,
    "text": "query AddDeviceQuery {\n  getProvData {\n    networkKey\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'db108b0326e08ff650012d087bdd6d9a';
export default node;
