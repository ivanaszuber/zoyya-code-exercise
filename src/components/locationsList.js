import React from "react";

// https://reactjs.org/docs/state-and-lifecycle.html
function LocationsList(props) {
  return (
    <div onClick={props.details}>
      <div className='card' key={props.location.id}>
        <span className='card-header'>
          <img src={props.location.imageUrl} alt={props.location.name} />
          <span className='card-title'>
            <h3>{props.location.name}</h3>
          </span>
        </span>
        <span className='card-summary'>
          <p>{props.location.category}</p>
        </span>
        <span className='card-summary'>
          <p>{props.location.address}</p>
        </span>
        <span className='card-summary'>
          <p>{props.location.city}</p>
        </span>
        <span className='card-meta'>See Location</span>
      </div>
    </div>
  );
}
export default LocationsList;




