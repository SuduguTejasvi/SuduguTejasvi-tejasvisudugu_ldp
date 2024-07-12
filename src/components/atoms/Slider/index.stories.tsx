import type { Meta, StoryObj } from '@storybook/react';
import SliderComponent from './index';

const meta: Meta<typeof SliderComponent> = {
  component: SliderComponent,
  title: 'Atoms/SliderComponent',
};

export default meta;

type Story = StoryObj<typeof SliderComponent>;

export const Default: Story = {
  args: {
    value: 500000,
    onChange: () => {
      alert('value changed');
    },
  },
};

export const MinValue: Story = {
  args: {
    value: 0,
    onChange: () => {
      alert('value changed');
    },
  },
};

export const MaxValue: Story = {
  args: {
    value: 880000,
    onChange: () => {
      alert('value changed');
    },
  },
};
