import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import General from "./channels/General";
import Lgtm from "./channels/Lgtm";
import Technology from "./channels/Technology";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://angular-test-backend-yc4c5cvnnq-an.a.run.app/graphiql',
  cache: new InMemoryCache(),
  credentials: 'include',
  headers: {
    "Access-Control-Allow-Origin" : "*",
    Accept : 'application/json',
    'Content-Type': 'application/json',
    mode:'no-cors'

  }
});

function App() {
  return (
    <ApolloProvider client={client}>
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/general" />
          </Route>
          <Route path="/general" exact component={General} />
          <Route path="/lgtm" component={Lgtm} />
          <Route path="/technology" component={Technology} />
        </Switch>
      </Router>
    </>
    </ApolloProvider>
  );
}

export default App;
