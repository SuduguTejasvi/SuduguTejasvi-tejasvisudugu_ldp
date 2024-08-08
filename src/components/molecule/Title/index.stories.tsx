import { Meta, StoryObj } from '@storybook/react';
import SummaryTitle  from './index';
import { TitleProps } from '../../../utils/interfaces';

const meta: Meta<typeof SummaryTitle> = {
  component: SummaryTitle,
  title: 'Components/SummaryTitle',
};

export default meta;

type story=StoryObj<typeof SummaryTitle>
export const Default : story={
args : {
  text: 'Summary Title',
  source: '/asserts/images/info-circle.svg', 
}}


export const NoIcon : story={
args : {
  text: 'Summary Title',
  source: '',
}}
