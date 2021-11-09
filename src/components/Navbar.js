import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import icon from "../images/icon.svg";
import icon from "../images/icon.png";
import "./Navbar.css";

const Nav = styled.div``;
const LeftLinks = styled.div``;
const RightLinks = styled.div``;
const NavLinks = styled(NavLink)``;
const Img = styled.img`
  height: 100px;
  width: 100px;
  font-size: 30px;
`;

const Navbar = () => {
  return (
    <Nav>
      <LeftLinks>
        <NavLinks to="/about">About</NavLinks>
        <NavLinks to="/store">Store</NavLinks>
      </LeftLinks>
      <RightLinks>
        <NavLinks to="/gmail">Gmail</NavLinks>
        <NavLinks to="/images">Images</NavLinks>
        <NavLinks to="/">
          <Img src={icon} />
        </NavLinks>
      </RightLinks>
    </Nav>
  );
};

export default Navbar;
