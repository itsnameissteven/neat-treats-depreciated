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

  return <MasonryGrid>{babies}</MasonryGrid>;
};
