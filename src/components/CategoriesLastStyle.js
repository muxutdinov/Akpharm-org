import styled from "styled-components";

export const WrapperSecond = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  background-color: whitesmoke;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: 800px;
    width: 500px;
  }
  @media only screen and (max-width: 900px) and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    height: 800px;
    width: 600px;
  }
`;
export const SecondOne = styled.div`
  background-color: transparent;
  flex: 3;
`;
export const SecondLeft = styled.div`
  margin-top: 50px;
  margin-left: 100px;
  /* display: flex; */
  @media screen and (max-width: 600px) {
    margin-right: 100px;
  }
  @media screen and (max-width: 900px) and (min-width: 600px) {
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
  @media screen and (max-width: 600px) {
    width: 350px;
    font-size: 16px;
    margin-right: 100px;
  }
  @media screen and (max-width: 900px) and (min-width: 600px) {
    width: 500px;
    font-size: 20px;
    margin-right: 200px;
    margin-bottom: 50px;
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
  @media screen and (max-width: 600px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 900px) and (min-width: 600px) {
    margin-left: 200px;
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
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ThirdBigCon = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 900px) {
    flex: 1;
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
  margin-top: ${({ last }) => (last ? "50px" : "")};
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
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
`;
