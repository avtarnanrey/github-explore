import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Footer, Header, Loader, Result, Search, Spacer } from "./views";

function App() {
  return (
    <main className="App" id="main-content">
      <Header />
      <Spacer height={100} />
      <Search />
      <Spacer height={100} />
      <Switch>
        <Route path="/:type/:term">
          <Result />
        </Route>
      </Switch>
      <Loader />
      <Footer />
    </main>
  );
}

export default App;
