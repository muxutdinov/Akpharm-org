import styled from "styled-components";
import { ReactComponent as sahifa } from "../assets/icons/sahifaa.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background: #e5e5e5;
`;
export const Top = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;
export const TopWrapperone = styled.div`
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
export const TopWrappertwo = styled.div`
  width: 260px;
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
export const Sahifa = styled(sahifa)`
  height: 8.910531044006348px;
  width: 5.128483295440674px;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-self: stretch;
`;
export const BodyWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  height: fit-content;
  width: 850px;
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
`;
export const BodyCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px auto;
  height: 250px;
  width: 250px;
  background: #f3f4f6;
  border-radius: 10px 5px 0px;
  border: 1px solid gray;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #fff;
`;
export const Img1 = styled.img`
  width: 100%;
  height: 100%;
`;
export const MiniText = styled.div`
  margin-top: 10px;
  width: 166px;
  height: 14px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #70798b;
`;
export const Title = styled.div`
  margin-left: 20px;
  margin-top: 7px;
  width: 251px;
  height: 42px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #011a61;
`;
export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f4f6;
  border-radius: 10px 10px 0px 0px;
  width: 100px;
  height: 100px;
`;
export const SidebarWrapper = styled.div`
  display: flex;
  width: 300px;
  position: sticky;
  left: 150px;
  flex-direction: column;
  top: 50px;
  align-self: flex-start;
  /* background-color: red; */
  /* position: fixed;
  margin-right: 750px;
  margin-top: 70px;
  height: 300px;
  width: 170px;
  justify-content: space-around;
  align-items: center; */
  .nav {
    background-color: transparent;
    text-decoration: none;
    padding-right: 65px;
    color: blue;
  }
  .active {
    transition: all 0.3s;
    font-weight: bold;
    color: #011a61 !important;
    background: #fff;
    border-radius: 10px;
    padding-right: 65px;
  }
  * {
    color: #011a61;
  }
`;
export const SidebarItem = styled.div`
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  width: 256px;
  height: 67px;
  background-color: transparent;
  border-radius: 8px 0px 0px 8px;
  /* flex-grow: 0; */
  /* margin: 0px 0px; */
`;
