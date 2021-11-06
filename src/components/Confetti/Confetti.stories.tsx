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
    setIsActive(false);
    setTimeout(() => {
      setIsActive(false);
    }, 2000);
  };
  return (
    <>
      <Button onClick={fireConfetti}>Explode Confetti</Button>
      <Confetti />
    </>
  );
};
