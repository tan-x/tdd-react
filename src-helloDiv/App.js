import React from "react";
import HelloDiv from "./components/HelloDiv";

function App() {
  return (
    <div>
      <HelloDiv
        className="myYellowClass"
        superHeroName="antonio"
        moreProps="yourName"
      />
      <HelloDiv
        class="myYellowClass"
        superHeroName="Walter"
        moreProps="yourName"
      />
      <HelloDiv superHeroName="Conner" moreProps="yourName" />
    </div>
  );
}

export default App;
