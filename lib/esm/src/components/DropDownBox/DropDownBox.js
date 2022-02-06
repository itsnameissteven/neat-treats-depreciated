import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { Icon } from "..";
var DropDownBox = function () {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var contentRef = useRef();
    useEffect(function () {
        function createKeyframeAnimation() {
            // Figure out the size of the element when collapsed.
            function ease(v, pow) {
                if (pow === void 0) { pow = 4; }
                return 1 - Math.pow(1 - v, pow);
            }
            var animateOpen = function () {
                var el = contentRef.current.getBoundingClientRect();
                return {
                    x: el.width / el.width,
                    y: 0 / el.height,
                };
            };
            var _a = animateOpen(), x = _a.x, y = _a.y;
            var animation = "";
            var inverseAnimation = "";
            for (var step = 0; step <= 100; step++) {
                // Remap the step value to an eased one.
                var easedStep = ease(step / 100);
                // Calculate the scale of the element.
                var xScale = x + (1 - x) * easedStep;
                var yScale = y + (1 - y) * easedStep;
                animation += "".concat(step, "% {\n      transform: scale(").concat(xScale, ", ").concat(yScale, ") translate3d( 0, 0, 0);\n    }");
                // And now the inverse for the contents.
                var invXScale = 1 / xScale;
                var invYScale = 1 / yScale;
                inverseAnimation += "".concat(step, "% {\n      transform: scale(").concat(invXScale, ", ").concat(invYScale, ") translate3d( 0, 0, 0);\n    }");
            }
            console.log(animation);
            return {
                parent: "\n      @keyframes menuAnimation {\n        ".concat(animation, "\n      }"),
                child: "\n      @keyframes menuContentsAnimation {\n        ".concat(inverseAnimation, "\n      }"),
            };
        }
        var _a = createKeyframeAnimation(), parent = _a.parent, child = _a.child;
        console.log(parent, child);
        // console.log(contentRef.current.style);
    }, []);
    // interactions
    var btnClass = classNames({
        "drop-down-box__preview__btn": true,
        "drop-down-box__preview__btn--open": isOpen,
    });
    var contentClass = classNames({
        "drop-down-box__content": true,
        "drop-down-box__content--open": isOpen,
    });
    var contentInverseClass = classNames({
        "drop-down-box__content__inverse": true,
        "drop-down-box__content__inverse--open": isOpen,
    });
    // function createKeyframeAnimation() {
    //   // Figure out the size of the element when collapsed.
    //   function ease(v: number, pow = 4) {
    //     return 1 - Math.pow(1 - v, pow);
    //   }
    //   const animateOpen = () => {
    //     const el = contentRef.current.getBoundingClientRect();
    //     return {
    //       x: el.width / el.width,
    //       y: 0 / el.height,
    //     };
    //   };
    //   let { x, y } = animateOpen();
    //   let animation = "";
    //   let inverseAnimation = "";
    //   for (let step = 0; step <= 100; step++) {
    //     // Remap the step value to an eased one.
    //     let easedStep = ease(step / 100);
    //     // Calculate the scale of the element.
    //     const xScale = x + (1 - x) * easedStep;
    //     const yScale = y + (1 - y) * easedStep;
    //     animation += `${step}% {
    //     transform: scale(${xScale}, ${yScale});
    //   }`;
    //     // And now the inverse for the contents.
    //     const invXScale = 1 / xScale;
    //     const invYScale = 1 / yScale;
    //     inverseAnimation += `${step}% {
    //     transform: scale(${invXScale}, ${invYScale}) translate3d( 0, 0, 0);
    //   }`;
    //   }
    //   console.log(animation);
    //   return {
    //     parent: `
    //     @keyframes menuAnimation {
    //       ${animation}
    //     }`,
    //     child: `
    //     @keyframes menuContentsAnimation {
    //       ${inverseAnimation}
    //     }`,
    //   };
    // }
    // createKeyframeAnimation();
    var click = function () {
        setIsOpen(!isOpen);
    };
    return (React.createElement("div", { className: "drop-down-box" },
        React.createElement("div", { className: "drop-down-box__preview" },
            React.createElement("h2", null, "This is my header preview"),
            React.createElement(Icon, { name: "chevron-down", color: "#333", className: btnClass, onClick: click, size: 20 })),
        React.createElement("div", { ref: contentRef, className: contentClass },
            React.createElement("div", { className: contentInverseClass },
                React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore labore esse maxime ut provident atque, dolorum quisquam optio nostrum minus debitis hic deserunt a rerum expedita porro quo. Unde, beatae?")))));
};
export default DropDownBox;
