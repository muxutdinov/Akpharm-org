import React from "react";
import CategoriesLast from "./CategoriesLast";
import Navbar from "./Navbar";
import PartnersItemComp from "./PartnersItemComp";
import { Container } from "./PartnersItemStyle";

const PartnersItem = () => {
  return (
      <Container>
        <Navbar />
        <PartnersItemComp />
        <CategoriesLast/>
      </Container>
  );
};

export default PartnersItem;
