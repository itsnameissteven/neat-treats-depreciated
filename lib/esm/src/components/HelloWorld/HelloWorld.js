import React from "react";
import './HelloWorld.scss';
var SayHello = function (_a) {
    var name = _a.name;
    return (React.createElement("div", { className: "h1" },
        "Hey ",
        name,
        ", say hello to TypeScript."));
};
export default SayHello;
