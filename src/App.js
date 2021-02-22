import "./App.css";
import locations from "./database/locations.json";
import React, { useState } from "react";

// Import components
import LocationsList from "./components/locationsList";
import LocationDetails from "./components/locationDetail";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <div className='App'>
      <div className='container cards'>
        {!selectedLocation ? locations.map((location, index) =>
            
            <LocationsList key={index}
              location={location}
              details={() => setSelectedLocation(location)}
            />
 
        ) : (
          <LocationDetails infoLocation={selectedLocation} />
        )}
        
      </div>
        {!!selectedLocation && (
          <div onClick={() => setSelectedLocation(null)}>{"<- BACK"}</div>
        )}
      </div>
  );
}

export default App;
