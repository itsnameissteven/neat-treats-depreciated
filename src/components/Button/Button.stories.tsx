import React from "react";

import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
};

export const Primary = () => <Button>Primary</Button>;

export const Secondary = () => <Button>Secondary</Button>;

export const Round = () => <Button round={true}>Round</Button>;
