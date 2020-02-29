import React from "react";

import Home from "./components/home"
import Dogs from "./components/dogs";
import MoreDogs from "./components/moreDogs"
import DogBreeds from "./components/dogBreeds"
import Cats from "./components/cats"
import NavBar from "./components/navBar"
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Switch>

    <Route exact path={"/"}>
    <Home/>
    </Route>
    <Route path = {"/dogs"} component = {Dogs}/>
    <Route path = {"/cats"} component = {Cats}/>
    {/* <Route path = {"/morecats"} component = {MoreCats}/> */}
    <Route path = {"/moredogs"} component = {MoreDogs}/>
    <Route path = {"/Dogbreeds"} component = {DogBreeds}/>  
      {/* <Dogs />
      <Moredogs/>
      <Cats/> */}
      <Route path = "*" render ={() => <div>
      <h1>
      NO ANIMALS HERE BRO
      </h1>
      </div>}/>
    </Switch>
    </div>
  );
}

export default App;
