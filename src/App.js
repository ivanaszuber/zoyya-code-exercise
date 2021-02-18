import "./App.css";
import locations from "./database/locations.json";
import React, { useState } from "react";

// Import components
import LocationsList from "./components/locationsList";
import LocationDetail from "./components/locationtDetail";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <div className='App'>
      <div className='container'>
        {!selectedLocation ? (
          <div className='cards' onClick={() => setSelectedLocation(locations)}> 
            <LocationsList />
          </div>
        ) : (
          <LocationDetail />
        )}
        {!!selectedLocation && (
          <div onClick={() => setSelectedLocation(null)}>{"<- BACK"}</div>
        )}
      </div>
    </div>
  );
}

export default App;
