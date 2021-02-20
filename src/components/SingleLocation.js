import React from "react";
import {
  StyledLocationCardContainer,
  StyledLocationCardContent,
  StyledImgContainer,
  StyledImg,
  StyledTxtContainer,
} from "./styles";

const SingleLocation = ({ location }) => {
  const { category, name, address, imageUrl } = location;
  return (
    <StyledLocationCardContainer>
      <StyledLocationCardContent>
        <StyledImgContainer>
          <StyledImg src={imageUrl} alt={name} />
        </StyledImgContainer>
        <StyledTxtContainer>
          <h4>{category}</h4>
          <h3>{name}</h3>
          <p>{address}</p>
          {address ? <a href="#"> {"-> SEE LOCATION"} </a> : null}
        </StyledTxtContainer>
      </StyledLocationCardContent>
    </StyledLocationCardContainer>
  );
};

export default SingleLocation;
