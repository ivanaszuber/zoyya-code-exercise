import "./App.css";
import locations from "./database/locations.json";
import React, { useState } from "react";
import LocationsList from "./components/LocationsList";
import Navigation from "./components/Navigation";
import LocationDetails from "./components/LocationDetails";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
 
   
    <div className="App">
    <Navigation />
      <div className="container">
        <div className="row">
          {!selectedLocation ? (
            locations.map((location) => (
              <LocationsList
                data={location}
                modal={() => setSelectedLocation(location)}
              />
            ))
          ) : (
            <LocationDetails dataLocation={selectedLocation} />
          )}
       
        </div>
      </div>
      {!!selectedLocation && (
        <div className="btn-back" onClick={() => setSelectedLocation(null)}>
          {"BACK"}
        </div>
      )}
    </div>
    
  );
}

export default App;
