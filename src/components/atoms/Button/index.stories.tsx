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
