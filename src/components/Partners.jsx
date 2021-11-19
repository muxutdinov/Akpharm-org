import React from "react";
import CategoriesLast from "./CategoriesLast";
import Navbar from "./Navbar";
import PartnersComp from "./PartnersComp";
import { Container } from "./PartnersStyle";

const Partners = () => {
  return (
    <Container>
      <Navbar />
      <PartnersComp />
      <CategoriesLast/>
    </Container>
  );
};

export default Partners;
