/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type AvailableDevicesQueryVariables = {};
export type AvailableDevicesQueryResponse = {
    readonly availableDevices: ReadonlyArray<string>;
};
export type AvailableDevicesQuery = {
    readonly response: AvailableDevicesQueryResponse;
    readonly variables: AvailableDevicesQueryVariables;
};



/*
query AvailableDevicesQuery {
  availableDevices
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "availableDevices",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AvailableDevicesQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AvailableDevicesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AvailableDevicesQuery",
    "operationKind": "query",
    "text": "query AvailableDevicesQuery {\n  availableDevices\n}\n"
  }
};
})();
(node as any).hash = '914d42cd28b9a90a7a6cf9e9e832df0a';
export default node;
