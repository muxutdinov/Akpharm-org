import React from "react";
import Navbar from "./Navbar";
import Navication from "./Sections/Navication";
import { Container, HomeAllWrapper, Text } from "./HomeStyle";
import HomeCard from "./HomeCard";
import HomeCardFirst from "./HomeCardFirst";

const Home = () => {
  return (
      <HomeAllWrapper>
        <Container>
          <Navbar />
          <Text>Ishonchli tibbiyot maxsulotlari distribyutori!</Text>
        </Container>
        <HomeCard />
        <HomeCardFirst/>
      </HomeAllWrapper>
  );
};

export default Home;
