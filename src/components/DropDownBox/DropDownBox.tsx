import React from "react";
import { Icon } from "..";
import "./DropDownBox.scss";

const DropDownBox = () => {
  return (
    <div className="drop-down-box">
      <div className="drop-down-box__preview">
        <h2>This is my header preview</h2>
        <Icon name="chevron-down" />
      </div>
    </div>
  );
};

export default DropDownBox;
