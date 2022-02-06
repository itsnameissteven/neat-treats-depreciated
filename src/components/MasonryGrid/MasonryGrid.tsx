import React, { useState, useEffect, cloneElement, Children } from "react";

interface IMasonryGrid {
  children: JSX.Element[];
  minWidth?: number;
  maxWidth?: number;
}

const MasonryGrid = ({
  children,
  minWidth = 750,
  maxWidth = 1200,
}: IMasonryGrid) => {
  const [width, setWidth] = useState(0);

  const StyledChildren = () => {
    return Children.map(children, (child) => {
      return cloneElement(child, {
        className: `${child.props.className} masonry-grid__child`,
      });
    });
  };

  useEffect(() => {
    const { innerWidth } = window;

    const handleResize = () => {
      if (innerWidth < maxWidth && innerWidth > minWidth) {
        return;
      }
      setWidth(innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleChildResize = () => {
      const elements = Array.from(
        document.getElementsByClassName(
          "masonry-grid__child"
        ) as HTMLCollectionOf<HTMLElement>
      );

      for (const child of elements) {
        child.style.height = "fit-content";
        const height = window
          .getComputedStyle(child)
          .getPropertyValue("height");
        const rowSpan = Math.round(parseInt(height, 10) / 40) + 1;
        child.style.cssText += `
          grid-row: span ${rowSpan};
          height: auto;
          opacity: 1;
        `;
      }
    };

    handleChildResize();
  }, [width]);

  return <div className="masonry-grid">{StyledChildren()}</div>;
};

export default MasonryGrid;
