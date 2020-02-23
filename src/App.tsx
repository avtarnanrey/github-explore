import React from 'react';
import { Header, Search, Spacer } from "./views";
import { Switch, Route } from "react-router-dom"; 
import { Result } from "./views/Result";

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
    </div>
  );
}

export default App;
