import React from "react";
import "../style/LocationDetails.css";

function LocationDetails(props) {
  console.log(props.dataLocation);
  return (
    <div className="location-details">
      <div className="location-header" style={{ backgroundImage: "url(" + `${props.dataLocation.imageUrl}` + ")" }}>
        <div className="location-header-title">
          <h1 className="location-title">{props.dataLocation.name}</h1>
          <p className="location-address">{props.dataLocation.address}</p>
        </div>
      </div>

      <div className="location-description">
        <h1>About Us</h1>
        <p className="location-description-content">
          {props.dataLocation.description}
        </p>
      </div>

      <div className="team-members">
        <h1>Team members</h1>
        {props.dataLocation.teamMembers.map((member) => (
          <li className="member" style={{ backgroundImage: "url(" + `${member.user.avatarUrl}` + ")" }}>
            <span className="member-name">{member.name}</span>
          </li>
        ))}
      </div>
    </div>
  );
}

export default LocationDetails;
