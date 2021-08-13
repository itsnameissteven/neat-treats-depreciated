import React from "react";
import styled, { keyframes } from "styled-components";

interface IStyle {
  top: string;
  left: string;
}
interface IGlitter {
  color: string;
  size: number;
  style: IStyle;
}

const GlitterInstance = ({ color, size, style }: IGlitter) => {
  const path = `M80 0s4.285 41.292 21.496 58.504C118.707 75.715 160 80 160 80s-41.293 4.285-58.504 21.496S80 160 80 160s-4.285-41.293-21.496-58.504C41.292 84.285 0 80 0 80s41.292-4.285 58.504-21.496C75.715 41.292 80 0 80 0z`;

  return (
    <GlitterWrapper style={style}>
      <GlitterWrapperSvg
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 160 160"
      >
        <path fill={color} d={path} />
      </GlitterWrapperSvg>
    </GlitterWrapper>
  );
};

const growAndShrink = keyframes`
0% {
  transform: scale(0);
}
50% {
  transform: scale(1);
}
100% {
  transform: scale(0);
}
`;

const spin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(180deg);
}
`;

const GlitterWrapper = styled.div`
  position: absolute;
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${growAndShrink} 600ms ease-in-out forwards;
  }
`;

const GlitterWrapperSvg = styled.svg`
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} 600ms linear forwards;
  }
`;

export default GlitterInstance;
