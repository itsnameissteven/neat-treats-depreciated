import React, { useState } from 'react';

import Input from '.';

export default {
  component: Input,
  title: 'Components/Input',
  argTypes: {},
};

export const Primary = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label={'legend'}
    />
  );
};
