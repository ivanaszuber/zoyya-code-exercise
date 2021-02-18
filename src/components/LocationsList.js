import React from "react";
import '../style/LocationList.css';
function LocationsList(props) {
  return (
    <div className="col-sm-3 " onClick={props.modal}>
      <div className="location-item">
        <img className="location-item-image" src={props.data.imageUrl} />
        <div className="item-content">
          <h2 className="location-item-title">{props.data.name}</h2>
          <p className="location-item-description">{props.data.description.substring(0,100)}...</p>
        </div>
      </div>
    </div>
  );
}
export default LocationsList;
