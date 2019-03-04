/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Bananas from './Bananas';
import LostOfGreetings from './LostOfGreetings';

AppRegistry.registerComponent(appName, () => Bananas);
AppRegistry.registerComponent(appName, () => LostOfGreetings);

