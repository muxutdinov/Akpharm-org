import styled from "styled-components";

export const Container = styled.div`
  /* margin-top: -80px; */
  height: fit-content;
  /* height: 1300px; */
  width: 100%;
  padding: 100px;
  background: #e5e5e5;
  @media screen and (max-width: 900px) and (min-width: 320px) {
    margin-top: auto;
    height: fit-content;
    width: 100%;
    padding: 100px;
    background: #e5e5e5;
  }
`;
export const Top = styled.div`
  margin-bottom: auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  @media screen and (max-width: 900px) and (min-width: 320px) {
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`;
export const Item1 = styled.div`
  width: 100px;
  height: 18px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 100%;
  color: #1f2022;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`;
export const Item2 = styled.div`
  width: 110px;
  height: 18px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 100%;
  color: #1f2022;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
`;
export const Item3 = styled.div`
  width: 150px;
  height: 18px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 100%;
  color: #70798b;
  flex: none;
  order: 4;
  flex-grow: 0;
  margin: 0px 8px;
`;
export const Wrapper = styled.div`
  height: fit-content;
  margin-bottom: -500px;
  /* padding-left: 100px; */
  width: 100%;
  background-color: transparent;
`;
export const Body = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  /* width: 60%; */
  height: 500px;
  @media screen and (max-width: 900px) and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
  }
`;
export const Right = styled.div`
  margin-left: 30px;
  width: 700px;
  @media screen and (max-width: 900px) and (min-width: 320px) {
    margin-left: 30px;
    width: 100px;
  }
`;

export const Text = styled.div`
  width: 700px;
  height: 76px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  color: #70798b;
  font-size: 16px;
  line-height: 160%;
  flex: none;
  order: 1;
  flex-grow: 0;
  @media screen and (max-width: 900px) and (min-width: 320px) {
    width: 200px !important;
    height: 76px;
    font-family: Rubik;
    background-color: #e5e5e5 !important;
    color: #70798b;
    flex: none;
    order: 1;
  }
`;
export const Title = styled.div`
  width: 580px;
  height: 57px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 57px;
  color: #011a61;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 0px;
  @media screen and (max-width: 900px) and (min-width: 320px) {
    width: 300px !important;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 30px !important;
    line-height: 57px;
    color: #011a61;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 16px 0px;
  }
`;
export const Left = styled.div`
  /* flex: 1; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* background-color: greenyellow; */
  width: 300px;
`;
export const Card = styled.div`
  margin-right: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 234px;
  height: 234px;
  background: #ffffff;
  border-radius: 27.4451px;
`;
export const ButtonWrapper = styled.div`
  background-color: #e5e5e5;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-evenly;
  align-items: center;
  height: fit-content;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 500px;
`;
export const BtnTitle = styled.div`
  margin-top: -150px;
  margin-bottom: 30px;
  margin-left: 20px;
  width: 500px;
  height: 57px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 57px;
  color: #011a61;
  @media screen and (max-width: 900px) and (min-width: 320px) {
    font-size: 28px;
    margin-top: 550px;
    margin-bottom: -700px;
  }
`;
export const BtnTextCard = styled.div`
  margin-left: 10px;
  margin-top: 7px;
  flex: 1;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #70798b;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const BtnTitleCard = styled.div`
  flex: 1;
  margin-top: 10px;
  margin-left: 10px;
  /* width: 243px; */
  /* height: 21px; */
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  /* line-height: 150%; */
  color: #011a61;
  flex: none;
  order: 1;
  flex-grow: 0;
  /* margin: 12px 0px; */
`;
export const BtnCard = styled.div`
  margin-top: 20px;
  height: 200px;
  width: 250px;
  background: #ffffff;
  box-shadow: 16px 24px 24px rgba(200, 200, 200, 0.05);
  border-radius: 12px;
`;
export const CardImgs = styled.img`
  margin-left: 60px;
  height: 140px;
  width: 50%;
`;
export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex: 3; */
  height: auto;
  width: 70%;
  overflow: hidden;
  /* background-color: lawngreen; */
  /* border: 1px solid red; */
`;
export const BtnCardWrapper = styled.div``;
export const BtnCardAllWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: fit-content;
  width: 100%;
  @media screen and (max-width: 900px) and (min-width: 320px) {
    margin-top: 700px;
  }
`;
