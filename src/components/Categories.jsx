import React from "react";
import { Container, TopContainer, Text } from "./CategoriesStyle";
import Navbar from "./Navbar";
import CategoriesComp from "./CategoriesComp";
import AutoPlay from "./HomeLastKaru";
import CategoriesLast from "./CategoriesLast";

const Categories = () => {
  return (
    <>
      <Container>
        <TopContainer>
          <Navbar />
          <Text>Akpharmdagi mahsulotlar katalogi</Text>
        </TopContainer>
        <CategoriesComp />
        <AutoPlay />
        <CategoriesLast />
      </Container>
    </>
  );
};

export default Categories;
