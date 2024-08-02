import React from 'react';
import { Meta, StoryObj} from '@storybook/react';
import TypeModule  from './index';
import { TypeModuleTypo } from '../../../utils/interfaces';

const meta: Meta<typeof TypeModule> = {
  component: TypeModule,
  title: 'Components/TypeModule',
};

export default meta;

type story=StoryObj<typeof TypeModule>

export const Texts: story = {
args : {
  texts: ['Subtitle 1', 'Heading 1', 'Subtitle 2', 'Heading 2'],
}}
export const CustomTexts : story={
args : {
  texts: ['Custom Subtitle 1', 'Custom Heading 1', 'Custom Subtitle 2', 'Custom Heading 2'],
}}

