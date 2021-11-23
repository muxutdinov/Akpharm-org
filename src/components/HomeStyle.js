import styled from "styled-components";
import main from "../assets/imges/main.png";

export const HomeAllWrapper = styled.div`
  height: fit-content;
  background: #e5e5e5;
  width: 100%;
`;
export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 767px;
  /* width: 1440px; */
  width: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.61))
      center center / cover no-repeat,
    url(${main}) rgb(8, 20, 32);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Text = styled.div`
  margin-top: 300px;
  margin-left: 280px;
  width: 772px;
  height: 231px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 160%;
  text-align: center;
  color: #ffffff;
`;
