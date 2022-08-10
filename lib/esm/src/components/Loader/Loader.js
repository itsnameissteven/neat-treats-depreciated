import React from 'react';
import { ProgressRing } from '..';
import '../../styles/_Loader.scss';
var Loader = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.size, size = _c === void 0 ? 50 : _c, border = _a.border, completedBorder = _a.completedBorder, _d = _a.stroke, stroke = _d === void 0 ? 4 : _d;
    return (React.createElement(ProgressRing, { className: "loader ".concat(className), percentageComplete: 30, size: size, border: border, completedBorder: completedBorder, stroke: stroke, hasPercentageDisplay: false }));
};
export default Loader;
