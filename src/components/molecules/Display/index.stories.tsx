import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Display from './index';

const meta:Meta<typeof Display>={
  title: 'Components/Display',
  component: Display,
};
export default meta;


type story=StoryObj<typeof Display>;

export const Default :story={
args : {
  input: '123 + 456',
  result: '579',
}}

export const LongInput :story={
args : {
  input: '1234567890 + 9876543210',
  result: '11111111100',
}}

export const WithDecimalResult :story={
args : {
  input: '10 / 3',
  result: 3.3333,
}}