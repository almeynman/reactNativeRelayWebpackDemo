import React from 'react-native';
//import Relay from 'react-relay'

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello
        </Text>
      </View>
    );
  }
}

//Relay.createContainer(App, {
//  fragments: {
//    hello: () => Relay.QL`
//      fragment on Hello {
//        world
//      }
//    `
//  }
//})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});