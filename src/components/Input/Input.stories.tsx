import React, { useState } from 'react';

import Input from '.';

export default {
  component: Input,
  title: 'Components/Input',
  argTypes: {
    placeHolder: {
      defaultValue: 'Enter your first name',
      type: 'string',
    },
    label: {
      defaultValue: 'First Name',
      type: 'string',
    },
    withLabel: {
      defaultValue: false,
      type: 'boolean',
    },
    errorMessage: {
      defaultValue: '',
      type: 'string',
    },
  },
};

const Template = ({ placeHolder, withLabel, errorMessage, label }) => {
  const [value, setValue] = useState('');
  return (
    <div className="white-backing" style={{ width: '600px' }}>
      <Input
        name="firstName"
        id="firstName"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label={label}
        placeholder={placeHolder}
        withLabel={withLabel}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export const Primary = Template.bind({});
