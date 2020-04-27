
// interface ProvData {
//   networkKey: string;
//   keyIndex: string;
//   ivIndex: string;
//   flags: string;
//   nextDevAddr: string;
// }

// interface Group {
//   name: string;
//   addr: string;
// }

// interface ProvDataVars {
//   webKey: string;
// }

// interface AddGroupVars {
//   webKey: string;
//   name: string;
// }

// const GET_PROV_DATA = gql`
//   query {
//     getProvData {
//       networkKey
//       keyIndex
//       ivIndex
//       flags
//       nextDevAddr
//     }
//   }
// `;

// const CONFIG_HUB = gql`
//   mutation {
//     configHub
//   } 
// `;

// const ADD_GROUP = gql`
//   mutation addGroup($name: String!) {
//     addGroup(name: $name) {
//       name
//       addr
//     }
//   }
// `;

// const ADD_DEVICE = gql`
//   mutation addDevice($name: String!, $devKey: String!, $addr: String!) {
//     addDevice(name: $name, devKey: $devKey, addr: $addr) {
//       name
//       addr
//     }
//   }
// `;

// const LIST_DEVICES = gql`
//   query {
//     listDevices {
//       name
//       addr
//       type
//     }
//   }
// `;

// const GET_STATE = gql`
//   query getState($devAddr: String!, $elemNumber: Int!) {
//     getState(devAddr: $devAddr, elemNumber: $devAddr) {
//       state
//       stateType
//     }
//   }
// `;

// const SET_STATE = gql`
//   mutation setState($devKey: String!, $elemNumber: Int!, $value: String!) {
//     setState(devKey: $devKey, elemNumber: $elemNumber, value: $value) {
//       state
//       stateType
//     }
//   }
// `;

