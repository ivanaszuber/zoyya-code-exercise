import React from "react";
import {
  StyledLocationDetailsContainer,
  StyledVisualsContainer,
  StyledDescriptionContainer,
  StyledDetailsContainer,
  StyledButton,
  StyledVisualImgContainer,
  StyledVisualImg,
  StyledDataContainer,
  StyledAboutAndContact,
  StyledA,
  StyledTeamContainer,
  StyledTeamMembersContainer,
  StyledTeamMember,
  StyledTeamMemberImgContainer,
  StyledAvatar,
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
    website,
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
      <StyledDataContainer>
        <StyledAboutAndContact>
          <div>
            <h2>About us</h2> <p>{description}</p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>
              <strong>Email: </strong>{" "}
              <StyledA href={`mailto:${email}`}>{email}</StyledA>
            </p>
            <p>
              <strong>Cell: </strong>{" "}
              <StyledA href={`tel:${mobilePhone}`}>{mobilePhone}</StyledA>
            </p>
            {website ? (
              <p>
                <strong>Website: </strong> <a href={website}>{website}</a>
              </p>
            ) : null}
          </div>
        </StyledAboutAndContact>
        <div>
          <h2>Working hours</h2>
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
        </div>
      </StyledDataContainer>
      <StyledTeamContainer>
        <h2>Our team</h2>
        <StyledTeamMembersContainer>
          {location.teamMembers.map((data) => (
            <StyledTeamMember>
              <StyledTeamMemberImgContainer>
                <StyledAvatar src={data.user.avatarUrl} alt={data.name} />
              </StyledTeamMemberImgContainer>
            </StyledTeamMember>
          ))}
        </StyledTeamMembersContainer>
        <StyledTeamMembersContainer>
          {location.teamMembers.map((data) => (
            <p key={data.id}>{data.name}</p>
          ))}
        </StyledTeamMembersContainer>
      </StyledTeamContainer>
    </StyledLocationDetailsContainer>
  );
};

export default LocationDetails;
