import React, { useEffect } from "react";
import top from "../assets/icons/top.svg";
import solid from "../assets/icons/solid.svg";
import Navication from "./Sections/Navication";
import {
  Button,
  Container,
  Iconone,
  Icontwo,
  Wrap,
  Wrapper,
  WrapperSecond,
} from "./NavbarStyle";
// import { useTranslation } from "react-i18next";

const Navbar = () => {
  //   const { t, i18n } = useTranslation();
  //   const onLanguageHandle = (newLang) => {
  // i18n.changeLanguage(newLang);
  // window.localStorage.setItem("language", newLang);
  //   };
  useEffect(() => {
    window.onscroll = scrollHead;
  }, []);
  const scrollHead = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header").style.background = "#fff";
    } else {
      document.getElementById("header").style.background = "transparent";
    }
  };
  return (
    <Container id="header">
      <WrapperSecond>
        <Iconone src={top} />
        <Icontwo src={solid} />
      </WrapperSecond>
      <Wrapper>
        <Navication />
        {/* <Wrap>Mahsulotlar katalogi</Wrap> */}
        {/* <Wrap>Hamkorlar</Wrap> */}
        {/* <Wrap> */}
        {/* <button
            onClick={() => {
              onLanguageHandle("uz");
            }}
          >
            uz
          </button>
          <button
            onClick={() => {
              onLanguageHandle("ru");
            }}
          >
            ru
          </button>
          <button
            onClick={() => {
              onLanguageHandle("en");
            }}
          >
            en
          </button> */}
        {/* </Wrap> */}
        <Button>Ariza qoldirish</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
