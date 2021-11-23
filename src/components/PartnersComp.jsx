import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import icon from "../assets/icons/sahifaa.svg";
import {
  Container,
  BigContainer,
  Title,
  Top,
  Card,
  Text,
  Img,
  Imgs
} from "./PartnersCompStyle";

const PartnersComp = () => {
  const [second, setSecond] = useState([]);
  useEffect(() => {
    getAxios();
  }, []);
  const getAxios = () => {
    axios
      .get("https://api.akpharm.uz/api/v1/manufacturer-list/?page=1&lan=uz")
      .then((res) => setSecond(res.data.results))
      .catch((err) => console.log(err));
  };
  return (
    <BigContainer>
      <Top>
        <Link to="/">
          <Title>Asosiy sahifa</Title>
        </Link>
        <Imgs src={icon} />
        <Text>Hamkorlarimiz</Text>
      </Top>
      <Container>
        {second.map((value, index) => {
          return (
            <Link to="/item">
              <Card key={index}>
                <Img src={value.logo} />
              </Card>
            </Link>
          );
        })}
      </Container>
    </BigContainer>
  );
};

export default PartnersComp;
