import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import icon from "../images/ICON.svg";
import './Navbar.css'


const Nav = styled.div``;
const LeftLinks = styled.div``;
const RightLinks = styled.div``;
const NavLinks = styled(NavLink)``;

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
        <NavLinks to="/"><h1>{icon}</h1></NavLinks>
      </RightLinks>
    </Nav>
  );
};

export default Navbar;
