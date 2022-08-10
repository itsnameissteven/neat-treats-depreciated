import React from 'react';
import Loader from './Loader';

export default {
  component: Loader,
  title: 'Components/Loader',
  argTypes: {
    size: {
      defaultValue: '50',
      type: 'number',
    },
    stroke: {
      defaultValue: '4',
      type: 'number',
    },
    border: {
      default: '#ade8f4',
      type: 'string',
    },
    completedBorder: {
      default: '#0077b6',
      type: 'string',
    },
  },
  decorators: [(Story) => <Story />],
};

const Template = ({ size, stroke, border, completeBorder }) => {
  return (
    <Loader
      size={size}
      stroke={stroke}
      border={border}
      completedBorder={completeBorder}
    />
  );
};

export const Primary = Template.bind({});
