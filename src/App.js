import "./App.css";
import locations from "./database/locations.json";
import React, { useState } from "react";
import SingleLocation from "./components/SingleLocation";
import { StyledLocationsListContainer } from "./components/styles";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <StyledLocationsListContainer>
      {!selectedLocation ? (
        locations.map((location) => (
          <div onClick={() => setSelectedLocation(location)}>
            <SingleLocation location={location} />
          </div>
        ))
      ) : (
        <div>...INSERT SELECTED LOCATION DATA HERE...</div>
      )}
      {!!selectedLocation && (
        <div onClick={() => setSelectedLocation(null)}>{"<- BACK"}</div>
      )}
    </StyledLocationsListContainer>
  );
}

export default App;
