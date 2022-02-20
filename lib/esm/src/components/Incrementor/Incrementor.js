import React from "react";
import { Icon } from "..";
var Incrementor = function (_a) {
    var maxCount = _a.maxCount, _b = _a.minCount, minCount = _b === void 0 ? 0 : _b, _c = _a.width, width = _c === void 0 ? "32px" : _c, currentCount = _a.currentCount, onSubtract = _a.onSubtract, onAdd = _a.onAdd;
    return (React.createElement("div", { className: "incrementor" },
        React.createElement(Icon, { color: "#343a40ff", disabled: currentCount === minCount, name: "minus-circle", onClick: onSubtract, size: 20 }),
        React.createElement("div", { className: "incrementor__count", style: { width: width } }, currentCount),
        React.createElement(Icon, { color: "#343a40ff", disabled: currentCount === maxCount, name: "plus-circle", onClick: onAdd, size: 20 })));
};
export default Incrementor;
