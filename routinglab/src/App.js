import React from "react";

import Dogs from "./components/dogs";
import Moredogs from "./components/randomNumberDogs"
import Cats from "./components/cats"

function App() {
  return (
    <div className="App">
      <Dogs />
      <Moredogs/>
      <Cats/>
    </div>
  );
}

export default App;
