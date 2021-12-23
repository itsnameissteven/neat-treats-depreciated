import React, { useState } from "react";

import Confetti from ".";
import { Button } from "..";

export default {
  component: Confetti,
  title: "Components/Confetti",
  argTypes: {},
};

export const Primary = () => {
  const [isActive, setIsActive] = useState(false);

  const fireConfetti = () => {
    setIsActive(!isActive);
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  };
  return (
    <>
      <Button onClick={fireConfetti}>Explode Confetti</Button>
      <Confetti />
    </>
  );
};
