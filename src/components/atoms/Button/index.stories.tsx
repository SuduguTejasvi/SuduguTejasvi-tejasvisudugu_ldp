import React from "react";
import Button from "./index";
import { Meta,StoryObj } from "@storybook/react/*";



const meta:Meta<typeof Button>={
  title: 'Components/Buttons',
  component:Button,
};
export default meta;


type story=StoryObj<typeof Button>;


export const Default:story={
args:{
  label:'Default',
  onClick:()=>{alert('clicked')}
}};

export const WithNumberLabel:story={
args : {
  label: 123,
  onClick:()=>{alert('clicked')}
}};

export const withLongLabel:story={
args : {
  label: 'This is a very long label that will not fit on the button',
  onClick:()=>{alert('clicked')}
}}





















// import React from 'react';
// import { Meta, StoryFn } from '@storybook/react';
// import Button from './index';

// export default {
//   title: 'Components/Button',
//   component: Button,
//   argTypes:{
//     backgroundColor: { control: 'color' },
//   }
// } as Meta;

// interface Props {
//   onClick: () => void;
//   label: string | number;
// }

// const Template: StoryFn<Props> = (args) => <Button {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   label: 'Click me',
//   onClick: () => alert('Button clicked!'),
// };

// export const WithNumberLabel = Template.bind({});
// WithNumberLabel.args = {
//   label: 42,
//   onClick: () => alert('Button clicked!'),
// };

// export const LongLabel = Template.bind({});
// LongLabel.args = {
//   label: 'This is a very long label for the button',
//   onClick: () => alert('Button clicked!'),
// };
