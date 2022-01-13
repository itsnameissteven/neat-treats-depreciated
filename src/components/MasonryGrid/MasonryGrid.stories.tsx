import React, { useState, useEffect } from "react";

import TextData from "./GridData/GridData";

import MasonryGrid from "./MasonryGrid";

export default {
  component: MasonryGrid,
  title: "Components/MasonryGrid",
};

export const Primary = () => {
  const babies = TextData.map((text, i) => {
    return (
      <div className="h" style={{ padding: "20px", color: "#fff" }} key={i}>
        <p style={{ margin: "unset" }}>{text}</p>
      </div>
    );
  });

  return (
    <>
      <h1 className="story__h1">MasonryGrid</h1>
      <p className="story__p">
        All this component needs is children. On window resize MasonryGrid does
        some behind the scenes work to make sure everything stays stacked
        nicely. If you would like to optimize performance add a minWidth and
        maxWidth prop to prevent continued rendering once the window reaches a
        certain width.
      </p>
      <MasonryGrid>{babies}</MasonryGrid>;
    </>
  );
};
