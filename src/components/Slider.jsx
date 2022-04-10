import React from "react";
import "./slider.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./img/img1.jpg";
import image2 from "./img/img2.jpg";
import image3 from "./img/img3.jpg";
import image4 from "./img/img4.jpg";
import image5 from "./img/img5.jpg";

function slider() {
  return (
    <div>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} classname="sliderimg" alt="" />
        <img src={image2} classname="sliderimg" alt="" />
        <img src={image3} classname="sliderimg" alt="" />
        <img src={image4} classname="sliderimg" alt="" />
        <img src={image5} classname="sliderimg" alt="" />
      </AliceCarousel>
    </div>
  );
}

export default slider;
