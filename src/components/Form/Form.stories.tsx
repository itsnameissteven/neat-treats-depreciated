import React from 'react';
import Form from './Form';
import { TFormComponent } from '../../types';

export default {
  component: Form,
  title: 'Components/Form',
  decorators: [(Story) => <Story />],
};

export const Primary = () => {
  const components: TFormComponent[] = [
    {
      type: 'input',
      id: 'test',
      name: 'test',
      value: '',
      placeHolder: 'test',
      label: 'Label',
      errorMessage: '',
      required: true,
    },
  ];

  return (
    <div className="white-backing" style={{ width: '00px' }}>
      <Form components={components} />
    </div>
  );
};
