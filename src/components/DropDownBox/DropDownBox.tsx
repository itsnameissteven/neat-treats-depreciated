import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { Icon } from "..";
import "./DropDownBox.scss";

const DropDownBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<any>();

  useEffect(() => {
    function createKeyframeAnimation() {
      // Figure out the size of the element when collapsed.
      function ease(v: number, pow = 4) {
        return 1 - Math.pow(1 - v, pow);
      }
      const animateOpen = () => {
        const el = contentRef.current.getBoundingClientRect();
        return {
          x: el.width / el.width,
          y: 0 / el.height,
        };
      };
      let { x, y } = animateOpen();
      let animation = "";
      let inverseAnimation = "";

      for (let step = 0; step <= 100; step++) {
        // Remap the step value to an eased one.
        let easedStep = ease(step / 100);

        // Calculate the scale of the element.
        const xScale = x + (1 - x) * easedStep;
        const yScale = y + (1 - y) * easedStep;

        animation += `${step}% {
      transform: scale(${xScale}, ${yScale}) translate3d( 0, 0, 0);
    }`;

        // And now the inverse for the contents.
        const invXScale = 1 / xScale;
        const invYScale = 1 / yScale;
        inverseAnimation += `${step}% {
      transform: scale(${invXScale}, ${invYScale}) translate3d( 0, 0, 0);
    }`;
      }
      console.log(animation);

      return {
        parent: `
      @keyframes menuAnimation {
        ${animation}
      }`,
        child: `
      @keyframes menuContentsAnimation {
        ${inverseAnimation}
      }`,
      };
    }
    const { parent, child } = createKeyframeAnimation();
    console.log(parent, child);
    // console.log(contentRef.current.style);
  }, []);

  // interactions
  const btnClass = classNames({
    "drop-down-box__preview__btn": true,
    "drop-down-box__preview__btn--open": isOpen,
  });

  const contentClass = classNames({
    "drop-down-box__content": true,
    "drop-down-box__content--open": isOpen,
  });

  const contentInverseClass = classNames({
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

  const click = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="drop-down-box">
      <div className="drop-down-box__preview">
        <h2>This is my header preview</h2>
        <Icon
          name="chevron-down"
          color="#333"
          className={btnClass}
          onClick={click}
          size={20}
        />
      </div>
      <div ref={contentRef} className={contentClass}>
        <div className={contentInverseClass}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            labore esse maxime ut provident atque, dolorum quisquam optio
            nostrum minus debitis hic deserunt a rerum expedita porro quo. Unde,
            beatae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropDownBox;
