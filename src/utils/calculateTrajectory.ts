export const calculateTrajectory = (velocity: number, angle: number) => {
  // Equation docs https://www.softschools.com/formulas/physics/trajectory_formula/162/
  for (let x = 0; x <= 100; x++) {
    const tan = x * Math.tan((angle * Math.PI) / 180);
    const gravity = 9.8 * x ** 2;
    const cos = 2 * velocity ** 2 * Math.cos((angle * Math.PI) / 180) ** 2;
    const y = tan - gravity / cos;
    console.log(x, y);
  }
};
