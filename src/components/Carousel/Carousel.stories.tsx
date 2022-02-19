import React from "react";

import Carousel from "./Carousel";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

export default {
  component: Carousel,
  title: "Components/Carousel",
  argTypes: {},
};

export const Primary = () => (
  <Carousel>
    <img src={image1} />
    <img src={image3} />
    <img src={image2} />
  </Carousel>
);
