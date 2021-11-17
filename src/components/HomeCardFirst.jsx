import React from "react";
import ok from "../assets/icons/ok.png";
import jamoa from "../assets/imges/jamoa.png";
import lesson from "../assets/imges/lesson.png";
import {
  Container,
  WrapFirst,
  Wrapper,
  Sarlavha,
  Text,
  Box,
  BoxChild,
  BoxChilds,
  Img,
  BoxChildTitle,
  BoxChildText,
  WrapSecond,
  Team,
  Lesson,
} from "./HomeCardFirstStyle";

const HomeCardFirst = () => {
  return (
    <Container>
      <Wrapper>
        <WrapFirst>
          <Sarlavha>Nega biz bilan hamkorlik qilishingiz kerak?</Sarlavha>
          <Text>
            Bizdagi hamyonbop narxlar, sifatli va kamnamo mahsulotlar, samarali
            va doʻstona hamkorlik — bizdan xarid qilishingiz va biz bilan
            ishlashingiz uchun asosli sabab boʻla oladi.
          </Text>
          <Box>
            <BoxChild>
              <Img src={ok} />
              <BoxChildTitle>Xususiy klinika</BoxChildTitle>
              <BoxChildText>
                Yurtimizning eng tanilgan va xalqimiz ishonchiga ega klinika
              </BoxChildText>
            </BoxChild>
            <BoxChilds>
              <Img src={ok} />
              <BoxChildTitle>Xususiy dorixonalar tarmogʻi</BoxChildTitle>
              <BoxChildText>
                Butun Oʻzbekiston boʻylab ochilayotgan dorixonalar tarmogʻi
              </BoxChildText>
            </BoxChilds>
          </Box>
        </WrapFirst>
        <WrapSecond>
          <Team src={jamoa} />
          <Lesson src={lesson} />
        </WrapSecond>
      </Wrapper>
    </Container>
  );
};

export default HomeCardFirst;
