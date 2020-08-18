import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";
import CharacterCard from "./components/CharacterCard";
import friends from "./friends.json";
console.log(friends);
function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {/* Need to combine the bottom 3 components into one */}
      {/* <SpongeBobCard />
      <MrKrabsCard />
      <SquidwardCard /> */}

      {/* your new CUSTOM card and PREPARE it to receive props*/}
      <CharacterCard
        name={friends[0].name}
        image={friends[0].image}
        occupation={friends[0].occupation}
        location={friends[0].location}
      />
      <CharacterCard
        name={friends[1].name}
        image={friends[1].image}
        occupation={friends[1].occupation}
        location={friends[1].location}
      />
      <CharacterCard
        name={friends[2].name}
        image={friends[2].image}
        occupation={friends[2].occupation}
        location={friends[2].location}
      />
    </Wrapper>
  );
}

export default App;
