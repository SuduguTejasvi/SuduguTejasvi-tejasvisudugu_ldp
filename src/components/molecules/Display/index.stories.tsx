import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Display from './index';

export default {
  title: 'Components/Display',
  component: Display,
} as Meta;

interface Props {
  input: string;
  result: string | number;
}

const Template: StoryFn<Props> = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  input: '123 + 456',
  result: '579',
};

export const LongInput = Template.bind({});
LongInput.args = {
  input: '1234567890 + 9876543210',
  result: '11111111100',
};

export const WithDecimalResult = Template.bind({});
WithDecimalResult.args = {
  input: '10 / 3',
  result: 3.3333,
};
