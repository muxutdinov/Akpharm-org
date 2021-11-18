import React from "react";
import icon1 from "../assets/icons/qongiroq.png";
import icon2 from "../assets/icons/tanlov.png";
import icon3 from "../assets/icons/sifat.png";

import {
  Button,
  CardFirst,
  CardSecond,
  CardThird,
  Container,
  Img,
  ImgWrapper,
  MainCard,
  MainText,
  MainTitle,
  Text,
  Title,
} from "./HomeCardThirdStyle";

const HomeCardThird = () => {
  return (
    <Container>
      <MainCard>
        <MainTitle>Qanday bogʻlanish mumkin?</MainTitle>
        <MainText>
          3 xil koʻrinishda biz bilan bogʻlanishingiz va hamkorlikni yoʻlga
          qoʻyishingiz mumkin
        </MainText>
        <Button>Ariza qoldirsh</Button>
      </MainCard>
      <CardFirst>
        <ImgWrapper>
        <Img src={icon1} />
        </ImgWrapper>
        <Title>
          Elektron manzilimizga yoki saytimiz orqali ariza qoldiring
        </Title>
        <Text>
          Oʻz taklif va murojaatlaringizni quyidagi elektron manzilga yozib
          qoldiring: info@akpharm.uz. Murojaatingizni koʻrib chiqib, aloqaga
          chiqamiz.
        </Text>
      </CardFirst>
      <CardSecond>
        <ImgWrapper>
          <Img src={icon2} />
        </ImgWrapper>
        <Title>
          Elektron manzilimizga yoki saytimiz orqali ariza qoldiring
        </Title>
        <Text>
          Oʻz taklif va murojaatlaringizni quyidagi elektron manzilga yozib
          qoldiring: info@akpharm.uz. Murojaatingizni koʻrib chiqib, aloqaga
          chiqamiz.
        </Text>
      </CardSecond>
      <CardThird>
        <ImgWrapper>
          <Img src={icon3} />
        </ImgWrapper>
        <Title>
          Elektron manzilimizga yoki saytimiz orqali ariza qoldiring
        </Title>
        <Text>
          Oʻz taklif va murojaatlaringizni quyidagi elektron manzilga yozib
          qoldiring: info@akpharm.uz. Murojaatingizni koʻrib chiqib, aloqaga
          chiqamiz.
        </Text>
      </CardThird>
    </Container>
  );
};

export default HomeCardThird;
