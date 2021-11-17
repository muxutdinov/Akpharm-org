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
        <Route  path="/" element={<Home />} />
        <Route  path="/categories" element={<Categories />} />
        <Route  path="/partners" element={<Partners />} />
        <Route  path="/item" element={<PartnersItem />} />
      </Routes>
    </>
  );
};

export default Routers;
