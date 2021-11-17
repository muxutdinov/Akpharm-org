import React from "react";
import icon1 from "../assets/icons/qongiroq.png";
import icon2 from "../assets/icons/tanlov.png";
import icon3 from "../assets/icons/sifat.png";
import icon4 from "../assets/icons/narxlar.png";
import {
  Box,
  BoxBir,
  BoxIkki,
  BoxTort,
  BoxUch,
  Container,
  Title,
  Img,
  Wrapper,
  BoxTitle,
  BoxText,
  TitleWrapper,
} from "./HomeCardSecondStyle";

const HomeCardSecond = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Bizdagi afzalliklar</Title>
      </TitleWrapper>
      <Wrapper>
        <Box>
          <BoxBir>
            <Img src={icon1} />
            <BoxTitle>Koʻp yillik tajriba</BoxTitle>
            <BoxText>
              20 yil biznes sohasida va 3 yil davomida tibbiyot sohasidagi
              tajriba yutuqlar sizning muvaffaqiyatingiz garovi boʻla oladi.
            </BoxText>
          </BoxBir>
          <BoxIkki>
            <Img src={icon2} />
            <BoxTitle>Keng tanlov</BoxTitle>
            <BoxText>
              Kompaniyamizdagi keng tanlov va mahsulotlar adadi sizning
              ehtiyojingizni toʻliq qondirishiga aminmiz!
            </BoxText>
          </BoxIkki>
          <BoxUch>
            <Img src={icon3} />
            <BoxTitle>Sifat</BoxTitle>
            <BoxText>
              Dunyoning koʻzga koʻringan brendlari bilan hamkorlik — mahsulotlar
              yuqori sifatli va xavfsiz boʻlishini taʼminlaydi.
            </BoxText>
          </BoxUch>
          <BoxTort>
            <Img src={icon4} />
            <BoxTitle>Hamyonbop narxlar</BoxTitle>
            <BoxText>
              Mahsulotlar bozor narxidan ancha pastligiga amin boʻling
            </BoxText>
          </BoxTort>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default HomeCardSecond;
