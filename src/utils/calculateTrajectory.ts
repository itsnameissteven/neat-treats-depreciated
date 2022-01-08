interface IArgs {
  x: number;
  velocity: number;
  angle: number;
  grav: number;
}

export const calculateTrajectory = ({ x, velocity, angle, grav }: IArgs) => {
  // Equation docs https://www.softschools.com/formulas/physics/trajectory_formula/162/
  const tan = x * Math.tan((angle * Math.PI) / 180);
  const gravity = grav * x ** 2;
  const cos = 2 * velocity ** 2 * Math.cos((angle * Math.PI) / 180) ** 2;
  const y = tan - gravity / cos;
  return {
    x,
    y,
  };
};
