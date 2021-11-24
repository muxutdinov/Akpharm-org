import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 100px;
  height: 900px;
  width: 100%;
  @media only screen and (max-width: 600px) {
    height: 1350px;
  }
`;
export const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 400px;
  width: 500px;
`;
export const MainTitle = styled.div`
  width: 516px;
  height: 51px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 51px;
  text-align: center;
  color: #011a61;
`;
export const MainText = styled.div`
  margin-left: 100px;
  width: 474px;
  height: 48px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #70798b;
`;
export const Button = styled.button`
  margin-right: 180px;
  display: flex;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  width: 181px;
  height: 51px;
  background: #6001d3;
  box-shadow: -10.6176px 14.1567px 35.3919px rgba(96, 1, 211, 0.301961);
  border-radius: 12px;
`;
export const CardFirst = styled.div`
  top: 0px;
  right: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 350px;
  width: 350px;
  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 400px;
    left: 100px;
  }
`;
export const CardSecond = styled.div`
  top: 250px;
  left: 570px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 350px;
  width: 350px;
  @media only screen and (max-width: 1000px) and (min-width: 600px) {
    position: absolute;
    left: 300px;
  }
  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 700px;
    left: 100px;
  }
`;
export const CardThird = styled.div`
  top: 500px;
  left: 100px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 350px;
  width: 350px;
  /* background-color: yellow; */
  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 1000px;
    left: 100px;
  }
`;
export const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 22.6508px;
`;
export const Img = styled.img`
  margin-right: 35px;
  width: 60px;
  height: 60px;
  top: calc(50% - 73.5px / 2);
  background: #ffffff;
  box-shadow: -7.5px 15px 30px rgba(8, 20, 32, 0.301961);
  border-radius: 15px;
`;

export const Title = styled.div`
  width: 273px;
  height: 43px;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #011a61;
`;
export const Text = styled.div`
  width: 271px;
  height: 84px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #70798b;
`;
