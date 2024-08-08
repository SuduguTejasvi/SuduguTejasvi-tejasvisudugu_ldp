import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './index';
import { IconProps } from '../../../utils/interfaces';

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Atoms/Icon',
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    source: '/asserts/images/info-circle.svg',
  } as IconProps,
};

