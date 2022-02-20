import React from "react";
import { Icon } from "..";

interface IIncrementor {
  maxCount?: number;
  minCount?: number;
  currentCount: number;
  width?: string;
  onSubtract: () => void;
  onAdd: () => void;
}

const Incrementor = ({
  maxCount,
  minCount = 0,
  width = "32px",
  currentCount,
  onSubtract,
  onAdd,
}: IIncrementor) => {
  return (
    <div className="incrementor">
      <Icon
        color="#343a40ff"
        disabled={currentCount === minCount}
        name="minus-circle"
        onClick={onSubtract}
        size={20}
      />
      <div className="incrementor__count" style={{ width: width }}>
        {currentCount}
      </div>
      <Icon
        color="#343a40ff"
        disabled={currentCount === maxCount}
        name="plus-circle"
        onClick={onAdd}
        size={20}
      />
    </div>
  );
};

export default Incrementor;
