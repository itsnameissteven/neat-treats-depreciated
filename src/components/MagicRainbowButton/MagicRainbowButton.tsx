import React from "react";
import styled from "styled-components";
import useRainbow from "../../hooks/useRainbow";

const ButtonElem = styled.button`
  position: relative;
  padding: 20px 40px;
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 30%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.17));
    border-radius: 0 0 12px 12px;
    pointer-events: none;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 2px;
    left: 6px;
    right: 6px;
    height: 20%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0)
    );
    border-radius: 20px 20px 100px 100px / 14px 14px 30px 30px;
    pointer-events: none;
  }
`;

interface IMagicRainbowButton {
  children?: any;
  intervalDelay?: number;
  delegated?: {
    [x: string]: any;
  };
}

const MagicRainbowButton = ({
  children,
  intervalDelay = 2000,
  ...delegated
}: IMagicRainbowButton) => {
  const transitionDelay = intervalDelay * 1.25;

  const colors = useRainbow({ intervalDelay });

  const colorKeys = Object.keys(colors);

  return (
    <ButtonElem
      {...delegated}
      style={{
        ...colors,
        transition: `
          ${colorKeys[0]} ${transitionDelay}ms linear,
          ${colorKeys[1]} ${transitionDelay}ms linear,
          ${colorKeys[2]} ${transitionDelay}ms linear
        `,
        background: `
          radial-gradient(
            circle at top left,
            var(${colorKeys[2]}),
            var(${colorKeys[1]}),
            var(${colorKeys[0]})
          )
        `,
      }}
    >
      {children}
    </ButtonElem>
  );
};

export default MagicRainbowButton;
