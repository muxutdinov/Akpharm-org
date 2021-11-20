import React from "react";
import { Container } from "./CategoriesStyle";
import Navbar from "./Navbar";
import CategoriesComp from "./CategoriesComp";
import AutoPlay from "./HomeLastKaru";
import CategoriesLast from "./CategoriesLast";

const Categories = () => {
  return (
    <>
      <Container>
        <Navbar />
        Categories
        <CategoriesComp />
        <AutoPlay />
        <CategoriesLast/>
      </Container>
    </>
  );
};

export default Categories;
