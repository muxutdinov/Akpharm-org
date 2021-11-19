import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import "/CategoriesComp.css";
import axios from "axios";

import {
  BodyCard,
  BodyWrapper,
  Container,
  Sahifa,
  SidebarWrapper,
  Top,
  TopWrapperone,
  TopWrappertwo,
  Wrapper,
  Card,
  SidebarItem,
  Img1,
  MiniText,
  Title,
  ImgWrapper,
  TitleWrapper,
} from "./CategoriesCompStyle";

const CategoriesComp = () => {
  const [wait, setWait] = useState(false);

  const [first, setFirst] = useState([]);
  useEffect(() => {
    getDrags();
  }, []);
  const getDrags = () => {
    axios
      .get("https://api.akpharm.uz/api/v1/drug-list/?page=1&lan=uz")
      .then((res) => {
        setFirst(res.data.results);
        setWait(true);
      })
      .catch((errors) => {
        console.log("test error", errors);
      });
  };
  return (
    <>
      <Container>
        <Top>
          <TopWrapperone>Asosiy sahifa</TopWrapperone>
          <Sahifa />
          <TopWrappertwo>Akpharmdagi maxsulotlar katalogi</TopWrappertwo>
        </Top>
        {wait ? (
          <Wrapper>
            <SidebarWrapper>
              <NavLink
                exact
                className="nav"
                activeClassName="active"
                to="/categories/type"
              >
                <SidebarItem>Barchasi</SidebarItem>
              </NavLink>
              <NavLink
                exact
                className="nav"
                activeClassName="active"
                to="/categories/tibbiy"
              >
                <SidebarItem>Tibbiy asbob-uskunalar</SidebarItem>
              </NavLink>
              <NavLink
                exact
                className="nav"
                activeClassName="active"
                to="/categories/gome"
              >
                <SidebarItem>Gomeopatik vositalar</SidebarItem>
              </NavLink>
              <NavLink
                exact
                className="nav"
                activeClassName="active"
                to="/categories/otapedik"
              >
                <SidebarItem>Otapedik vositalar</SidebarItem>
              </NavLink>
              <NavLink
                exact
                className="nav"
                activeClassName="active"
                to="/categories/:yopishqoq"
              >
                <SidebarItem>Yopishqoq vositalar va bintlar</SidebarItem>
              </NavLink>
            </SidebarWrapper>
            <BodyWrapper>
              <BodyCard>
                {first.map((value, index) => (
                  <Card key={index}>
                    <ImgWrapper>
                      <Img1 src={value.image} alt="rasm"></Img1>
                    </ImgWrapper>
                    <TitleWrapper>
                      <MiniText>{value.name}</MiniText>
                      <Title>{value.category.name}</Title>
                    </TitleWrapper>
                  </Card>
                ))}
              </BodyCard>
            </BodyWrapper>
          </Wrapper>
        ) : (
          <>
            <h1>Loading...</h1>
          </>
        )}
      </Container>
    </>
  );
};
export default CategoriesComp;
