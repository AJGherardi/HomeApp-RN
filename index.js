/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App.tsx';
import {name as appName} from './app.json';
import { enableScreens } from 'react-native-screens';

enableScreens();
AppRegistry.registerComponent(appName, () => App);
