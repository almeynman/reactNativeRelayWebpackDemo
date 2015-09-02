require('react-native-browser-polyfill');
import React from 'react-native';
import Relay from '../relay/relay';
import reactNativeRelayWebpackDemo from './components/App';

React.createElement(Relay.RootContainer, {
  Component: App,
  route: new _AppHomeRoute2['default'](),
})

React.AppRegistry.registerComponent('reactNativeRelayWebpackDemo', () => reactNativeRelayWebpackDemo);
