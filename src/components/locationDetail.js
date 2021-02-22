import React from "react";

function LocationDetails(props) {
  console.log(props.infoLocation);
  return (
      <header>
      <div className="header-title"><h3>{props.infoLocation.name}</h3>
      <span className='header-summary'>{props.infoLocation.description}</span>
      </div>
      <div className="header-image"><img src={props.infoLocation.imageUrl} className='detail-img' alt={props.infoLocation.name} /></div>
      </header>  
  );
}
export default LocationDetails;