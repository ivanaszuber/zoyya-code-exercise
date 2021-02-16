import './App.css';
import locations from './database/locations.json';
import React, { useState } from 'react';
import LocationsList from './components/LocationsList';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null)

  /*{/*<div onClick={()=>setSelectedLocation(location)}>{location.name}</div>*/
  return (
    <div className="App">
      <div className="container">
        <div className="row">
      {!selectedLocation ?
        locations.map(location => <LocationsList data={location} modal={() => setSelectedLocation(location)}/> )
       : <div>
          ...INSERT SELECTED LOCATION DATA HERE...
        </div>}
      {!!selectedLocation &&  <div onClick={()=>setSelectedLocation(null)}>{"<- BACK"}</div>}
      </div>
      </div>
    </div>
  );
}

export default App;
