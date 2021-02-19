import React, { Component } from "react";
import locations from "../database/locations.json";

class LocationsList extends Component {
  render() {
    return locations.map((location, index) => (
      <div className='card' key={index}>
        <span className='card-header'>
          <img src={location.imageUrl} alt={location.name} />
          <span className='card-title'>
            <h3>{location.name}</h3>
          </span>
        </span>
        <span className='card-summary'>
          <p>{location.category}</p>
        </span>
        <span className='card-summary'>
          <p>{location.address}</p>
        </span>
        <span className='card-summary'>
          <p>{location.city}</p>
        </span>
        <span className='card-meta'>See Location</span>
      </div>
    ));
  }
}

export default LocationsList;


