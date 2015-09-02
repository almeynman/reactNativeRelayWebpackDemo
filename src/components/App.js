import React from 'react-native';
import Relay from '../../relay/relay';

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.hello.world}
        </Text>
      </View>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    hello: () => Relay.QL`
      fragment on Hello {
        world
      }
    `
  }
})


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