import styled from "styled-components";

// SINGLE LOCATION CARD STYLES

export const StyledLocationCardContainer = styled.div`
  height: 320px;
  width: 220px;
  margin: 10px;
  overflow: hidden;
  border-radius: 5px;
  background-size: cover;
  background-color: white;
  background-position: center;
  box-shadow: 0px 1px 2px 0px purple;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
`;

export const StyledLocationCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const StyledImgContainer = styled.div`
  height: 220px;
  position: relative;
`;

export const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const StyledTxtContainer = styled.div`
  height: 50%;
  width: 100%;
  padding: 0px 5px;
  line-height: 5px;
  h4 {
    font-size: 14px;
    color: purple;
  }
  h3 {
    font-size: 12px;
  }
  p {
    font-size: 10px;
  }
  a {
    font-size: 10px;
  }
`;

// LOCATIONS LIST STYLES

export const StyledLocationsListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

// LOCATION DETAIL STYLES

export const StyledLocationDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px 60px;
`;

export const StyledVisualsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 300px;
  width: 100%;
`;

export const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 45%;
  height: 100%;
  background-color: lightgray;
`;

export const StyledDetailsContainer = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 30px 0 0 50px;
  margin-right: 20px;
  h2 {
    margin-bottom: 0;
  }
  p {
    margin-bottom: 0;
  }
`;

export const StyledButton = styled.div`
  height: 40px;
  width: 250px;
  border-radius: 5px;
  color: white;
  background-color: blue;
  margin-left: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyledVisualImgContainer = styled.div`
  height: 100%;
  width: 55%;
  position: relative;
`;

export const StyledVisualImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

//ABOUT US, CONTACT US & WORKING HOURS

export const StyledDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledAboutAndContact = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: black;
`;

//TEAM

export const StyledTeamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: baseline;
`;

export const StyledTeamMembersContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: baseline;
`;

export const StyledTeamMember = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTeamMemberImgContainer = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: whitesmoke;
  overflow: hidden;
`;

export const StyledAvatar = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

// NAVBAR STYLES

export const StyledNavbar = styled.div`
  background-color: lightgray;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const StyledNavLogo = styled.div`
  cursor: pointer;
  margin-left: 20px;
`;

export const StyledNavbarItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  width: 50%;
`;
