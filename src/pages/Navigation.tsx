export type RootStackParamList = {
  Welcome: undefined;
  App: undefined;
  AddDeviceSplash: undefined;
  AddGroupSplash: undefined;
  AddHubSplash: undefined;
  AddDevice: { device: string, group: string };
  AddGroup: undefined;
  AddHub: { host: string };
  AvailableDevices: { group: string };
  AvailableHubs: undefined;
  SelectGroup: undefined;
  Device: { devAddr: string, devName: string };
  Home: undefined;
  Devices: undefined;
  Groups: undefined;
  Group: { addr: string, name: string };
};