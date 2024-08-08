import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './index';
import { TextProps } from '../../../utils/interfaces';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Atoms/Text',
}

export default meta;

type Story = StoryObj<TextProps>;

export const Default: Story = {
args :{
  variant: 'h6',
  text: 'Default Text',
} }

export const Title: Story ={

args : {
  variant: 'h4',
  text: 'Heading Text',
} }

export const SubTitle: Story = {
args : {
  variant: 'subtitle1',
  text: 'Custom Text',
} }
