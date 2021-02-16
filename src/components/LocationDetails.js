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
      {location.workShifts[0].openHours.map((data) => (
        <p key={data.day}>
          {!data.dayOff ? (
            <p>
              {data.dayName} {data.startTime} {data.endTime}
            </p>
          ) : (
            <p>{data.dayName} Zatvoreno</p>
          )}
        </p>
      ))}
      {location.teamMembers.map((data) => (
        <p key={data.id}>{data.name}</p>
      ))}
    </div>
  );
};

export default LocationDetails;
