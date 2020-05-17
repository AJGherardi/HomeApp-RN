/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ListGroupsQueryVariables = {};
export type ListGroupsQueryResponse = {
    readonly listGroups: ReadonlyArray<{
        readonly name: string;
        readonly addr: string;
    }>;
};
export type ListGroupsQuery = {
    readonly response: ListGroupsQueryResponse;
    readonly variables: ListGroupsQueryVariables;
};



/*
query ListGroupsQuery {
  listGroups {
    name
    addr
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Group",
    "kind": "LinkedField",
    "name": "listGroups",
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
    "name": "ListGroupsQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ListGroupsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ListGroupsQuery",
    "operationKind": "query",
    "text": "query ListGroupsQuery {\n  listGroups {\n    name\n    addr\n  }\n}\n"
  }
};
})();
(node as any).hash = 'be56a66ce41d7478114f6ae500d27fdb';
export default node;
