import React from "react";
import CategoriesLast from "./CategoriesLast";
import Navbar from "./Navbar";
import PartnersItemComp from "./PartnersItemComp";
import { Container ,TopContainer,Text} from "./PartnersItemStyle";

const PartnersItem = () => {
  return (
    <Container>
      <TopContainer>
        <Navbar />
        <Text>HEBU MEDICAL</Text>
      </TopContainer>
      <PartnersItemComp />
      <CategoriesLast />
    </Container>
  );
};

export default PartnersItem;
