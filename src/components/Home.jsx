import React from "react";
import Navbar from "./Navbar";
import Navication from "./Sections/Navication";
import { Container, HomeAllWrapper, Text } from "./HomeStyle";
import HomeCard from "./HomeCard";
import HomeCardFirst from "./HomeCardFirst";
import HomeCardSecond from "./HomeCardSecond";
import CenterMode from "./HomeMaxsulotKarusel";
import HomeCardThird from "./HomeCardThird";
import AutoPlay from "./HomeLastKaru";
const Home = () => {
  return (
    <HomeAllWrapper>
      <Container>
        <Navbar />
        <Text>Ishonchli tibbiyot maxsulotlari distribyutori!</Text>
      </Container>
      <HomeCard />
      <HomeCardFirst />
      <HomeCardSecond />
      <CenterMode/>
      <HomeCardThird/>
      <AutoPlay/>
    </HomeAllWrapper>
  );
};

export default Home;
