import React from "react";
// import { Img } from "./Slider";
import "./HomeMaxsulotKarusel.css";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import img1 from "../assets/imges/main.png";
import img2 from "../assets/imges/student.png";
import img3 from "../assets/imges/team.png";

const CenterMode = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
  };
  return (
    <>
      <div style={{ width: "100%", padding: "20px" }} className="Perent">
        <h2 className="maxsulotlar">Akpharmdagi maxsulotlar katalogi</h2>
        <Slider {...settings} className="Container">
          <div className="itemSliderTArget">
            <div className="itemSlider">
              <img src={img1} width="100%" height="100%" />
              <div className="imgtext" width="100%">
                Tibbiy asbob-uskunalar
              </div>
            </div>
          </div>
          <div className="itemSliderTArget">
            <div className="itemSlider">
              <img src={img2} width="100%" height="100%" />
              <div className="imgtext">Tibbiy asbob-uskunalar</div>
            </div>
          </div>
          <div className="itemSliderTArget">
            <div className="itemSlider">
              <img src={img3} width="100%" height="100%" />
              <div className="imgtext">Tibbiy asbob-uskunalar</div>
            </div>
          </div>
          <div className="itemSliderTArget">
            <div className="itemSlider">
              <img src={img1} width="100%" height="100%" />
              <div className="imgtext">Tibbiy asbob-uskunalar</div>
            </div>
          </div>
          <div className="itemSliderTArget">
            <div className="itemSlider">
              <img src={img2} width="100%" height="100%" />
              <div className="imgtext">Tibbiy asbob-uskunalar</div>
            </div>
          </div>
          <div className="itemSliderTArget">
            <div className="itemSlider">
              <img src={img1} width="100%" height="100%" />
              <div className="imgtext">Tibbiy asbob-uskunalar</div>
            </div>
          </div>
        </Slider>
        <div className="LastButton">Barchasini Korish</div>
      </div>
    </>
  );
};
export default CenterMode;
