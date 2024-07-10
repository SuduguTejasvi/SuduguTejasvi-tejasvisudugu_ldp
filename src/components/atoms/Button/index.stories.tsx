import React from "react";
import Button from "./index";
import { StoryFn } from "@storybook/react/*";



export default{
  title: 'Components/Buttons',
  component:'Button',
}
interface StoryProps{
  label:string|number,
  onClick:()=>void,
}

const Template:StoryFn<StoryProps>=(args)=><Button {...args}/>


export const Default=Template.bind({});
Default.args={
  label:'Default',
  onClick:()=>{alert('clicked')}
}

export const WithNumberLabel=Template.bind({});
WithNumberLabel.args = {
  label: 123,
  onClick:()=>{alert('clicked')}
}

export const withLongLabel=Template.bind({});
withLongLabel.args = {
  label: 'This is a very long label that will not fit on the button',
  onClick:()=>{alert('clicked')}
}





















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
