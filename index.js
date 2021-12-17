/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TestApp from "./TestApp";
import NormalBookPager from "./bookPager/normalBookPager/NormalBookPager";


AppRegistry.registerComponent(appName, () => NormalBookPager);
