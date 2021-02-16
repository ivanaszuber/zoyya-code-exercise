import React from "react";
import { StyledNavbar, StyledNavLogo, StyledNavbarItems } from "./styles/index";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavLogo>
        <h3>ZOYYA</h3>
      </StyledNavLogo>
      <StyledNavbarItems>
        <li>Back to business app</li>
        <li>My places</li>
        <li>My appointments</li>
      </StyledNavbarItems>
    </StyledNavbar>
  );
};

export default Navbar;
