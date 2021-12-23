import React, { useRef, useEffect } from "react";
import { Icon } from "../..";
import "./ConfettiInstance.scss";
import { range, random, calculateTrajectory } from "../../../utils";
import styled, { keyframes } from "styled-components";
import { parse } from "url";
import randomColor from "randomcolor";

const ConfettiInstance = () => {
  const animation = () => {
    const velocity = random(1, 40);
    const angle = random(30, 90);
    const gravity = random(3, 10);
    let animation = "";
    for (let i = 0; i <= 200; i++) {
      const { x, y } = calculateTrajectory({
        x: i,
        velocity,
        angle,
        grav: gravity,
      });
      const flippedNumber = () => {
        if (y > 0) {
          return parseFloat(`-${y}`);
        } else {
          return parseFloat(y.toString().replace(/-/, ""));
        }
      };
      animation += `${x / 2}% {
        transform: translate(${x * 5}px, ${flippedNumber() * 5}px)}`;
    }
    return animation;
  };

  const confettiAnimation = keyframes`${animation()}`;

  const ConfettiWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    animation: ${confettiAnimation} 3s linear forwards;
  `;
  const confettiStyles = {
    background: randomColor(),
    height: "8px",
    width: "8px",
    borderRadius: "50px",
  };

  return (
    <ConfettiWrapper>
      <div className="confetti__instance" style={confettiStyles}></div>
      {/* <Icon name="chevron-circle-up" color={randomColor()} /> */}
    </ConfettiWrapper>
  );
};
export default ConfettiInstance;
