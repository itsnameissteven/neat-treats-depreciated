import React from "react";

import Carousel from "./Carousel";

export default {
  component: Carousel,
  title: "Components/Carousel",
  argTypes: {},
};

export const Primary = () => (
  <Carousel>
    <img src="./images/image1.jpg" />
    <img src="./images/image2.jpg" />
    <img src="./images/image3.jpg" />
  </Carousel>
);
