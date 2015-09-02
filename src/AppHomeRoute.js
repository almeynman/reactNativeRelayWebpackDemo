import Relay from '../relay/relay';

export default class extends Relay.Route {
  static queries = {
    hello: (Component) => Relay.QL`
      query {
        hello {
          ${Component.getFragment('hello')},
        }
      }
    `,
  };
  static routeName = 'AppHomeRoute';
}