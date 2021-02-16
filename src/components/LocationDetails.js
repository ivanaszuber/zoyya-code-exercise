import React from "react";
import {
  StyledLocationDetailsContainer,
  StyledVisualsContainer,
  StyledDescriptionContainer,
  StyledDetailsContainer,
  StyledButton,
  StyledVisualImgContainer,
  StyledVisualImg,
} from "./styles";

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
    <StyledLocationDetailsContainer>
      <StyledVisualsContainer>
        <StyledDescriptionContainer>
          <StyledDetailsContainer>
            <h2>{name}</h2>
            <p>{address}</p>
            <p>
              {zipCode} {city}
            </p>
          </StyledDetailsContainer>
          <StyledButton
            onClick={() => {
              alert("THANK YOU!");
            }}
          >
            Request your appointment
          </StyledButton>
        </StyledDescriptionContainer>
        <StyledVisualImgContainer>
          <StyledVisualImg src={imageUrl} alt={name} />
        </StyledVisualImgContainer>
      </StyledVisualsContainer>
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
    </StyledLocationDetailsContainer>
  );
};

export default LocationDetails;
