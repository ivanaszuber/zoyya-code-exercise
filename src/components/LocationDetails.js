import React from "react";

const LocationDetails = ({ location }) => {
  const {
    name,
    address,
    city,
    zipCode,
    imageUrl,
    description,
    email,
    mobilePhone,
  } = location;
  return (
    <div>
      <h2>{name}</h2>
      <p>{address}</p>
      <p>
        {zipCode} {city}
      </p>
      <img src={imageUrl} alt={name} />
      <p>{description}</p>
      <p>{email}</p>
      <p>{mobilePhone}</p>
    </div>
  );
};

export default LocationDetails;
