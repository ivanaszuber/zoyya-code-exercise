import "./App.css";
import locations from "./database/locations.json";
import React, { useState } from "react";
import SingleLocation from "./components/SingleLocation";
import LocationDetails from "./components/LocationDetails";
import { StyledLocationsListContainer } from "./components/styles";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <StyledLocationsListContainer>
      {!selectedLocation ? (
        locations.map((location) => (
          <div onClick={() => setSelectedLocation(location)} key={location.id}>
            <SingleLocation location={location} />
          </div>
        ))
      ) : (
        <LocationDetails location={selectedLocation} />
      )}
      {!!selectedLocation && (
        <div onClick={() => setSelectedLocation(null)}>{"<- BACK"}</div>
      )}
    </StyledLocationsListContainer>
  );
}

export default App;
