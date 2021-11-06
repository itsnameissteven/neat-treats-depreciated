import React, { useState } from "react";
import { Icon } from "..";
import "./DropDownBox.scss";

const DropDownBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="drop-down-box">
      <div className="drop-down-box__preview">
        <h2>This is my header preview</h2>
        <Icon name="chevron-down" color="#333" />
      </div>
    </div>
  );
};

export default DropDownBox;
