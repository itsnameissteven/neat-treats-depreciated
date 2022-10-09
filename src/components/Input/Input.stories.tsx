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
    <div className="white-backing" style={{ width: '600px' }}>
      <Input
        name="firstName"
        id="firstName"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label={'Legend'}
        placeholder="First Name"
      />
    </div>
  );
};
