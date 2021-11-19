import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../components/Home";
import Categories from "../components/Categories";
import Partners from "../components/Partners";
import PartnersItem from "../components/PartnersItem";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/partners" element={<Partners />} />
        <Route exact path="/item" element={<PartnersItem />} />
      </Routes>
    </>
  );
};

export default Routers;
