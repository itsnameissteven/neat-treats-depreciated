import React from "react";

import Carousel from "./Carousel";

export default {
  component: Carousel,
  title: "Components/Carousel",
  argTypes: {},
};

export const Primary = () => (
  <Carousel>
    <h1>1</h1>
    <h2>2</h2>
    <h3>3</h3>
  </Carousel>
);
