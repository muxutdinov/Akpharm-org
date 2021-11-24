import styled from "styled-components";

export const Container = styled.div`
  margin-top: -100px;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 700px;
  width: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const WrapFirst = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
  }
`;
export const Sarlavha = styled.div`
  width: 500px;
  height: 100px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 140%;
  color: #011a61;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 0px;
  @media only screen and (max-width: 500px) {
    width: 300px;
    margin-left: 50px;
    margin-top: -150px;
  }
`;
export const Text = styled.div`
  width: 468.47px;
  height: 130px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  color: #70798b;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 16px 0px;
  @media only screen and (max-width: 500px) {
    /* margin-top: 100px; */
    width: 300px;
    margin-left: 50px;
    margin-top: 70px;
  }
`;
export const Box = styled.div`
  position: absolute;
  top: 250px;
  display: flex;
  width: 500px;
  @media only screen and (max-width: 500px) {
    margin-top: 100px;
    width: 300px;
    margin-left: 50px;
    top: 0;
  }
`;
export const BoxChild = styled.div`
  margin-top: 20px;
  top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 500px) {
    position: absolute;
    bottom: 280px;
    /* right: 100px; */
  }
`;
export const BoxChilds = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  top: 100px;
  left: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 500px) {
    position: absolute;
    top: 180px;
    left: 0px;
  }
`;
export const Img = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 7px;
  background: #fd346e;
  mix-blend-mode: normal;
  box-shadow: 2px 2px 5px 5px pink;
`;
export const BoxChildTitle = styled.div`
  margin-top: 20px;
  width: 250px;
  height: 19.99px;
  left: 135px;
  top: 1973.8px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 19px;
  color: #011a61;
`;
export const BoxChildText = styled.div`
  margin-top: 20px;
  width: 275px;
  height: 41.98px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #70798b;
`;

export const WrapSecond = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
export const Team = styled.img`
  width: 480px;
  border-radius: 20px;
`;
export const Lesson = styled.img`
  margin-top: 20px;
  width: 480px;
  border-radius: 20px;
`;
