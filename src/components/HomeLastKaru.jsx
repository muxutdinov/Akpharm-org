import React, { Component } from "react";
import Slider from "react-slick";
import "./HomeLastKaru.css";
import people1 from "../assets/imges/people1.png";
import people2 from "../assets/imges/people2.png";
import people3 from "../assets/imges/people3.png";
class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="LastCon">
        <div className="LastCardTitleWrapper">
          <h2 className="LastKaruTitle">Hamkorlarimiz fikrlari</h2>
        </div>
        <Slider {...settings}>
          <div className="LastCardItem">
            <div className="LastCardItemChild">
              <img src={people1} className="LastCardImg" />
              <div className="LastCardText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                ipsam, recusandae, corporis provident consectetur unde similique
                quibusdam id odio expedita rerum quisquam iure eius nam
              </div>
              <hr />
              <div className="MiniCard">
                <div className="MiniName">Bexruz Akramov</div>
                <div className="MiniTitle">OOO"APOLLO INVEST"</div>
              </div>
            </div>
          </div>
          <div className="LastCardItem">
            <div className="LastCardItemChild">
              <img src={people2} className="LastCardImg" />
              <div className="LastCardText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                ipsam, recusandae, corporis provident consectetur unde similique
                quibusdam id odio expedita rerum quisquam iure eius nam
              </div>
              <hr />
              <div className="MiniCard">
                <div className="MiniName">Aleksandr Yury</div>
                <div className="MiniTitle">OOO"Alex Pharm Sanoat"</div>
              </div>
            </div>
          </div>
          <div className="LastCardItem">
            <div className="LastCardItemChild">
              <img src={people3} className="LastCardImg" />
              <div className="LastCardText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                ipsam, recusandae, corporis provident consectetur unde similique
                quibusdam id odio expedita rerum quisquam iure eius nam
              </div>
              <hr />
              <div className="MiniCard">
                <div className="MiniName">Dilshod Movlonov</div>
                <div className="MiniTitle">OOO"Lochinbek</div>
              </div>
            </div>
          </div>
          <div className="LastCardItem">
            <div className="LastCardItemChild">
              <img src={people1} className="LastCardImg" />
              <div className="LastCardText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                ipsam, recusandae, corporis provident consectetur unde similique
                quibusdam id odio expedita rerum quisquam iure eius nam
              </div>
              <hr />
              <div className="MiniCard">
                <div className="MiniName">Dilshod Movlonov</div>
                <div className="MiniTitle">OOO"Lochinbek</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
export default AutoPlay