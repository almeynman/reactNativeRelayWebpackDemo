require('react-native-browser-polyfill');
import React from 'react-native';
import Relay from '../relay/relay';
import App from './components/App';
import AppHomeRoute from './AppHomeRoute';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:3000/graphql')
);

let Root = React.createElement(Relay.RootContainer, {
  Component: App,
  route: new AppHomeRoute(),
});

class RootApp extends React.Component {
  render() {
    return (
      <Relay.RootContainer
        Component={App}
        route={new AppHomeRoute()}
        />
    );
  }
}

React.AppRegistry.registerComponent('reactNativeRelayWebpackDemo', () => RootApp);
