import React, { useState } from "react";
import generateSparkle from "../../utils/generateSparkle";
import SparkleInstance from "../GlitterInstance/GlitterInstance";
import styled from "styled-components";
import useRandomInterval from "../../hooks/useRandomInterval";
import range from "../../utils/range";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import randomColor from "randomcolor";

interface IGlitter {
  color?: string;
  rainbow?: boolean;
  children: JSX.Element;
  minSize?: number;
  maxSize?: number;
  [x: string]: any;
}

const Glitter = ({
  color = "#FFC700",
  rainbow = false,
  children,
  minSize = 10,
  maxSize = 20,
  ...delegated
}: IGlitter) => {
  const [sparkles, setSparkles] = useState(() => {
    return range(3).map(() => generateSparkle({ color, minSize, maxSize }));
  });

  const prefersReducedMotion = usePrefersReducedMotion();

  useRandomInterval(
    () => {
      const now = Date.now();
      const newColor = rainbow ? randomColor() : color;
      const sparkle = generateSparkle({ color: newColor, minSize, maxSize });

      const nextSparkles = sparkles.filter((sp) => {
        const delta = now - sp.createdAt;
        return delta < 750;
      });

      nextSparkles.push(sparkle);

      setSparkles(nextSparkles);
    },
    prefersReducedMotion ? null : 400,
    prefersReducedMotion ? null : 1000
  );

  return (
    <Wrapper {...delegated}>
      {sparkles.map((sparkle) => (
        <SparkleInstance
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
`;

const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

export default Glitter;
