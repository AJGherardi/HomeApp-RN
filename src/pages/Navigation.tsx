import { Device } from "react-native-ble-plx";

export type RootStackParamList = {
  Welcome: undefined;
  App: undefined;
  AddDeviceSplash: undefined;
  AddHubSplash: undefined;
  AddDevice: {device: Device};
  AddHub: {host: string};
  AvailableDevices: undefined;
  AvailableHubs: undefined;
  Device: undefined;
  Home: undefined;
  Devices: undefined;
  Groups: undefined;
};