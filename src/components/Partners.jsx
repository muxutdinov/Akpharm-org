import React from "react";
import CategoriesLast from "./CategoriesLast";
import Navbar from "./Navbar";
import PartnersComp from "./PartnersComp";
import { Container, TopContainer, Text } from "./PartnersStyle";

const Partners = () => {
  return (
    <Container>
      <TopContainer>
          <Navbar />
          <Text>Akpharmdagi mahsulotlar katalogi</Text>
        </TopContainer>
      <PartnersComp />
      <CategoriesLast/>
    </Container>
  );
};

export default Partners;
