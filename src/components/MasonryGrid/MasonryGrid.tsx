import React, { useState, useEffect } from "react";

import "./MasonryGrid.scss";

interface IMasonryGrid {
  children: HTMLElement[];
}

const MasonryGrid = ({ children }: IMasonryGrid) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const { innerWidth } = window;

    const handleResize = () => {
      if (innerWidth < 1200 && innerWidth > 750) {
        /* 1200 and 750 can be max/min width */
        setWidth(innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleChildResize = () => {
      const elements = Array.from(
        document.getElementsByClassName(
          "child-class-name"
        ) as HTMLCollectionOf<HTMLElement>
      );

      for (const child of elements) {
        child.style.height = "fit-content";
        const height = window
          .getComputedStyle(child)
          .getPropertyValue("height");
        const rowSpan = Math.round(parseInt(height, 10) / 40) + 1;
        child.style.cssText = `
          grid-row: span ${rowSpan};
          height: auto;
          opacity: 1;
        `;
      }
    };

    handleChildResize();
  }, [width]);

  return <div className="masonry-grid">{children}</div>;
};

export default MasonryGrid;
