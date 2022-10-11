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
      id: 'firstName',
      value: '',
      label: 'FirstName',
      errorMessage: '',
      required: true,
    },
    {
      type: 'input',
      id: 'LastName',
      value: '',
      label: 'Last Name',
      errorMessage: '',
      required: true,
    },
    {
      type: 'input',
      id: 'streetAddress',
      value: '',
      label: 'Street Address',
      errorMessage: '',
    },
    {
      type: 'input',
      id: 'apt',
      value: '',
      label: 'Apt',
      errorMessage: '',
      required: true,
    },
    {
      type: 'input',
      id: 'name',
      value: '',
      label: 'Apt',
      errorMessage: '',
      required: true,
    },
    {
      type: 'input',
      id: 'buy',
      value: '',
      label: 'Apt',
      errorMessage: '',
      required: true,
    },
    {
      type: 'input',
      id: 'no',
      value: '',
      label: 'Apt',
      errorMessage: '',
      required: true,
    },
    {
      type: 'input',
      id: 'to',
      value: '',
      label: 'Apt',
      errorMessage: '',
      required: true,
    },
  ];

  return (
    <div className="white-backing" style={{ width: '600px' }}>
      <Form components={components} />
    </div>
  );
};
