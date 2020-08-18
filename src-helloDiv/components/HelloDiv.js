import React from "react";

function HelloDiv(props) {
  console.log("hey hey here go ya props", props);
  return <h3>{props.superHeroName}</h3>;
}

export default HelloDiv;
