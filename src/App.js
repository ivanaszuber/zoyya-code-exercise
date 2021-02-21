import './App.css';
import locations from './database/locations.json';
import React, { useState } from 'react';
import { Location } from './Locations';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  return (
    <div className="App">
      {!selectedLocation ?
        locations.map(location =>  <div onClick={()=>setSelectedLocation(location)}>
          <div className="location-list">
            <img className="images" src={location.imageUrl} alt={location.orgId}/>
          <div className="text">
          <h2>{location.category}</h2>
            <h2>{location.name}</h2>
            <p>{location.address}</p>
            <p>{location.city}</p>
            <a href="https://www.google.com/maps" alt="Google maps">Find nearest location!</a>

          </div>
                     </div>
            </div>)
          : <div className="page-two">
              <div className="flex-one">
                <div className="info">
                  <h2 className="name">{selectedLocation.category}</h2>
                  <h2 className="name">{selectedLocation.name}</h2>
                  <p className="address">{selectedLocation.address}</p>
                  <p className="city">{selectedLocation.city}</p>
                </div>
                <div className="image-item">
                  <img className="image" src={selectedLocation.imageUrl} alt={selectedLocation.orgId}/>
                </div>
              </div>
            <div className="flex-two">
              <div>
              <p className="description">{selectedLocation.description}</p>
              </div>
              <div className="contacts-info">
              <p className="contacts"><b>Contact</b></p>
                <p>Email: {selectedLocation.email}</p>
                <p>Mobile: {selectedLocation.mobilePhone}</p>
                <p>Phone: {selectedLocation.phone}</p>
              </div>
              <div>
                <Location className="locat" location={selectedLocation.workShifts[0]} />
              </div>
            <div>
          </div>
        </div>  
      </div>}

      {!!selectedLocation &&  <div className="button" onClick={()=>setSelectedLocation(null)}>{"GO BACK"}</div>}
    </div>
  );
}

export default App;
