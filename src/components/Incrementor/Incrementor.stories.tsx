import React, { useState } from "react";

import Incrementor from ".";

export default {
  component: Incrementor,
  title: "Components/Incrementor",
  argTypes: {},
};

export const Primary = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="white-backing incrementor-story">
      <Incrementor
        currentCount={count}
        onAdd={() => setCount(count + 1)}
        onSubtract={() => setCount(count - 1)}
        maxCount={20}
      />
    </div>
  );
};
