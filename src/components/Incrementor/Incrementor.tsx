import React from "react";
import { Icon } from "..";

interface IIncrementor {
  maxCount?: number;
  minCount?: number;
  currentCount: number;
  onSubtract: () => void;
  onAdd: () => void;
}

const Incrementor = ({
  maxCount,
  minCount = 0,
  currentCount,
  onSubtract,
  onAdd,
}: IIncrementor) => {
  return (
    <div className="incrementor">
      <Icon
        color="#000"
        disabled={currentCount === minCount}
        name="minus-circle"
        onClick={onSubtract}
      />
      <p>{currentCount}</p>
      <Icon
        color="#000"
        disabled={currentCount === maxCount}
        name="plus-circle"
        onClick={onAdd}
      />
    </div>
  );
};

export default Incrementor;
