export var calculateTrajectory = function (_a) {
    var x = _a.x, velocity = _a.velocity, angle = _a.angle, grav = _a.grav;
    // Equation docs https://www.softschools.com/formulas/physics/trajectory_formula/162/
    var tan = x * Math.tan((angle * Math.PI) / 180);
    var gravity = grav * Math.pow(x, 2);
    var cos = 2 * Math.pow(velocity, 2) * Math.pow(Math.cos((angle * Math.PI) / 180), 2);
    var y = tan - gravity / cos;
    return {
        x: x,
        y: y,
    };
};
