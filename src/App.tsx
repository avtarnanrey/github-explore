import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Footer, Header, Result, Search, Spacer } from "./views";

function App() {
  return (
    <div className="App">
      <Header />
      <Spacer height={100} />
      <Search />
      <Spacer height={100} />
      <Switch>
        <Route path="/:type/:term">
          <Result />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
