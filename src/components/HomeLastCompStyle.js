import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
export const WrapperFirst = styled.div`
  height: 400px;
  width: 100%;
  background-color: yellow;
  display: flex;
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 100%;
  }
`;
export const FirstOne = styled.div`
  display: flex;
  align-items: center;
  padding: 80px;
  flex: 2;
`;
export const FirstLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;
export const FirstTitle = styled.div`
  width: 433px;
  height: 62px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 62px;
  font-feature-settings: "liga" off;
  color: #011a61;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 0px;
  @media only screen and (max-width: 1000px) {
  font-size: 32px;
  }
`;
export const FirstText = styled.div`
  width: 400px;
  height: 75px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 159%;
  color: #70798b;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 24px 0px;
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;
export const FirstButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  position: static;
  width: 200px;
  height: 51px;
  background: #6001d3;
  box-shadow: -10.6176px 14.1567px 35.3919px rgba(96, 1, 211, 0.301961);
  border-radius: 12px;
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 16px 0px;
`;

export const FirstTwo = styled.div`
  margin-left: -30px;
  flex: 3;
  display: flex;
  align-items: center;
`;
export const FirstRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1000px) {
    height: 100%;
    width: 100%;
  }
`;
export const FirstRightTop = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 5px;
  flex-wrap: wrap;
`;
export const FirstRightItem = styled.div`
  margin: 10px;
  /* margin-right: 15px; */
  width: 150px;
  height: 85px;
  background: #ffffff;
  border-radius: 15.4943px;
`;
export const FirstRightButtom = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5px;
  flex-wrap: wrap;
`;
export const WrapperSecond = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  background-color: transparent;
  @media only screen and (max-width: 1050px) and (min-width: 900px) {
    display: flex;
    flex-direction: column;
    height: 800px;
    /* height: fit-content; */
    width: 100%;
    scroll-snap-type: none;
  }
  @media only screen and (max-width: 900px) and (min-width: 300px) {
    display: flex;
    flex-direction: column;
    height: 800px;
    width: fit-content;
  }
`;
export const SecondOne = styled.div`
  /* flex: 3; */
  width: 100%;
  background-color: transparent;
`;
export const SecondLeft = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  /* display: flex; */
  width: 100%;
  /* @media screen and (max-width: 600px) { */
  /* width: fit-content; */
  /* margin-right: 100px; */
  /* } */
  @media screen and (max-width: 900px) and (min-width: 300px) {
    margin-right: 200px;
  }
`;
export const SecondLeftTitle = styled.div`
  width: 700px;
  height: 144px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 150%;
  color: #011a61;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 24px 0px;
  @media screen and (max-width: 600px) {
    /* margin-right: 200px; */
    width: 350px;
    font-size: 30px;
  }
  @media screen and (max-width: 900px) and (min-width: 600px) {
    /* margin-right: 200px; */
    width: 500px;
    font-size: 38px;
  }
`;
export const SecondLeftText = styled.div`
  width: 635px;
  height: 75px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 159%;
  color: #70798b;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 24px 0px;
  @media screen and (max-width: 900px) and (min-width: 600px) {
    width: 500px;
    font-size: 20px;
    margin-right: 200px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 600px) {
    width: 350px;
    font-size: 16px;
    margin-right: 100px;
  }
`;
export const SecondLastWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Phone = styled.div`
  margin-left: 10px;
  width: 200px;
  height: 20px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 100%;
  color: #011a61;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
  @media screen and (max-width: 900px) and (min-width: 600px) {
    font-size: 20px;
  }
`;
export const Location = styled.div`
  margin-left: 20px;
  width: 620px;
  height: 20px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 100%;
  color: #011a61;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
  @media screen and (max-width: 900px) and (min-width: 600px) {
    font-size: 20px;
  }
`;
export const Img = styled.img``;
export const PhoneWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const SecondTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
export const SecondRight = styled.div`
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: 900px) and (min-width: 600px) {
    /* margin-left: 200px; */
  }
  @media screen and (max-width: 600px) {
    margin-right: 400px;
  }
`;
export const RightInputWrapper = styled.div`
  margin-top: 10px;
`;
export const Input = styled.input`
  outline: none;
  color: black;
  width: 400px;
  height: 56px;
  background: #ffffff;
  border-radius: 8px;
`;
export const IntupTitle = styled.div`
  margin-bottom: 10px;
  width: 200px;
  height: 12px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 100%;
  color: #70798b;
`;

export const Area = styled.input`
  outline: none;
  color: black;
  width: 400px;
  height: 102px;
  background: #ffffff;
  border-radius: 8px;
`;
export const RightButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 46px;
  background: #011a61;
  border-radius: 12px;
`;
export const WrapperThird = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;
export const ThirdContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 700px) and (min-width: 320px) {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
  }
`;
export const ThirdBigCon = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 700px) {
    flex: 1;
    margin-left: ${({ one }) => (one ? "100px" : "")};
  }
`;
export const ThirdConCenter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 900px) {
    flex: 1;
  }
`;
export const ThirdImg = styled.img`
  margin-right: 150px;
  width: 124px;
  height: 80px;
`;
export const Num = styled.div`
  width: 300px;
  height: 38px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #1f2022;
`;
export const ThirdMiddleTitle = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  width: 200px;
  height: 14px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  text-transform: uppercase;
  color: #1f2022;
`;
export const ThirdMiddleText = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  color: #1f2022;
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 22px 0px;
  margin-right: ${({ one }) => (one ? "60px" : "")};
`;
export const LastRightWrapper = styled.div`
  margin-left: ${({ two }) => (two ? "130px" : "")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Imgs = styled.img`
  width: 20px;
  margin-right: 10px;
`;
export const LastText = styled.div`
  width: 500px;
  height: 26px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  color: #768695;
`;
export const LastTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  @media only screen and (max-width: 700px) {
    position: relative;
    margin-top: 300px;
    margin-left: 50px;
  }
`;
export const Border = styled.hr`
  height: 1px;
  width: 100%;
  /* background-color: red; */
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
