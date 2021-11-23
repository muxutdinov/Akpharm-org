import React from "react";
import Navbar from "./Navbar";
import Navication from "./Sections/Navication";
import { TopContainer, HomeAllWrapper, Text } from "./HomeStyle";
import HomeCard from "./HomeCard";
import HomeCardFirst from "./HomeCardFirst";
import HomeCardSecond from "./HomeCardSecond";
import CenterMode from "./HomeMaxsulotKarusel";
import HomeCardThird from "./HomeCardThird";
import AutoPlay from "./HomeLastKaru";
import HomeLastComp from "./HomeLastComp.jsx";
const Home = () => {
  return (
    <HomeAllWrapper>
      <TopContainer>
        <Navbar />
        <Text>Ishonchli tibbiyot maxsulotlari distribyutori!</Text>
      </TopContainer>
      <HomeCard />
      <HomeCardFirst />
      <HomeCardSecond />
      <CenterMode/>
      <HomeCardThird/>
      <AutoPlay/>
      <HomeLastComp/>
    </HomeAllWrapper>
  );
};

export default Home;
