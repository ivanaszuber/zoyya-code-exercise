import styled from "styled-components";

// SINGLE LOCATION CARD STYLES

export const StyledLocationCardContainer = styled.div`
  height: 310px;
  width: 200px;
  margin: 10px;
  overflow: hidden;
  border-radius: 5px;
  background-size: cover;
  background-color: white;
  background-position: center;
  box-shadow: 0px 1px 2px 0px purple;
  display: flex;
  flex-direction: column;
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
`;

export const StyledImg = styled.img`
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
  justify-content: space-around;
  align-items: center;
`;
