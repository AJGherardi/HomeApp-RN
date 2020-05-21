import { Device } from "react-native-ble-plx";

export type RootStackParamList = {
  Welcome: undefined;
  App: undefined;
  AddDeviceSplash: undefined;
  AddGroupSplash: undefined;
  AddHubSplash: undefined;
  AddDevice: { device: Device, group: string };
  AddGroup: undefined;
  AddHub: { host: string };
  AvailableDevices: { group: string };
  AvailableHubs: undefined;
  SelectGroup: undefined;
  Device: { devAddr: string };
  Home: undefined;
  Devices: undefined;
  Groups: undefined;
  Group: { addr: string, name: string };
};