import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import NavBar from "./components/navBar";
import Favorites from "./layouts/favorites";

function App() {
  return (
    <main>
      <NavBar />;
      <Switch>
        <Route path="/favorites" component={Favorites} />
        <Route path="/" component={Main} />
      </Switch>
    </main>
  );
}

export default App;
