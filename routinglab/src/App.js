import React from "react";

import Dogs from "./components/dogs";
import Moredogs from "./components/randomNumberDogs"
import Cats from "./components/cats"
import NavBar from "./components/navBar"
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Switch>

      <Dogs />
      <Moredogs/>
      <Cats/>
    </Switch>
    </div>
  );
}

export default App;
