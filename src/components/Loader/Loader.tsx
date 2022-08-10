import React from 'react';
import { ProgressRing } from '..';
import '../../styles/_Loader.scss';

interface ILoaderProps {
  className?: string;
  /** Size of the progress ring */
  size?: number;
  /** Thickness of Strock */
  stroke?: number;
  /** Initial border color */
  border?: string;
  /** Color of completed color */
  completedBorder?: string;
}

const Loader = ({
  className = '',
  size = 50,
  border,
  completedBorder,
  stroke = 4,
}: ILoaderProps) => {
  return (
    <ProgressRing
      className={`loader ${className}`}
      percentageComplete={30}
      size={size}
      border={border}
      completedBorder={completedBorder}
      stroke={stroke}
      hasPercentageDisplay={false}
    />
  );
};

export default Loader;
