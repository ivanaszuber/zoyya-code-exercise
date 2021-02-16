import "./App.css";
import locations from "./database/locations.json";
import React, { useState } from "react";
import SingleLocation from "./components/SingleLocation";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
