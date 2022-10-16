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
      label: 'First Name',
      required: true,
    },
    {
      type: 'input',
      id: 'LastName',
      value: '',
      label: 'Last Name',
      required: true,
    },
    {
      type: 'input',
      id: 'streetAddress',
      value: '',
      label: 'Street Address',
      required: true,
    },
    {
      type: 'input',
      id: 'apt',
      value: '',
      label: 'Apt',
    },
    {
      type: 'input',
      id: 'city',
      value: '',
      label: 'City',
      required: true,
    },
    {
      type: 'input',
      id: 'state',
      value: '',
      label: 'State',
      required: true,
    },
    {
      type: 'input',
      id: 'zipCode',
      value: '',
      label: 'Zip Code',
      required: true,
    },
    {
      type: 'input',
      id: 'socialSecurity',
      value: '',
      label: 'Social Security Number',
      required: true,
    },
  ];

  return (
    <div className="white-backing" style={{ width: '600px' }}>
      <Form components={components} title="Storybook Demo Form" />
    </div>
  );
};
