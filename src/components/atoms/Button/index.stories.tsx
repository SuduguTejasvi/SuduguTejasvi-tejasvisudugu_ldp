import { Meta,StoryObj } from "@storybook/react/*";
import CustomButton from "./index";

const meta:Meta<typeof CustomButton>={
//  title:'Atoms/CustomButton',
 component:CustomButton,

};
export default meta;

type story=StoryObj<typeof CustomButton>;

export const Active:story={
    args:{
        label:'Review your credit',
	disabled:false,
	type:'contained',
	onClick:()=>{alert('Reviewed your credit')}
    }
}

export const Disabled:story={
    args:{
        label:'Review your credit',
	disabled:true,
	type:'contained',
	onClick:()=>{alert('Reviewed your credit')}
    }
}

export const Reset:story={
    args:{
        label:'Reset',
        disabled:false,
        type:'outlined',
        onClick:()=>{alert('Reset Done')}
    }
}









































































// import type { Meta, StoryObj } from '@storybook/react';
// import CustomButton from './index';
// import { CustomButtonProps } from '../../../utils/interfaces';

// const meta: Meta<typeof CustomButton> = {
//   component: CustomButton,
//   title: 'Atoms/CustomButton',
// };

// export default meta;

// type Story = StoryObj<typeof CustomButton>;

// export const Enabled: Story = {
//   args: {
//     label: 'Review your credit',
//     disabled: false,
//     type: 'contained',
//     onClick: () => alert('Reviewed your credit'),
//   } as CustomButtonProps,
// };

// export const Disabled: Story = {
//   args: {
//     label: 'Review your credit',
//     disabled: true,
//     type: 'contained',
//     onClick: () => alert('Reviewed your credit'),
//   } as CustomButtonProps,
// };

// export const Outlined: Story = {
//   args: {
//     label: 'Reset',
//     disabled: false,
//     type: 'outlined',
//     onClick: () => alert('Reset Done'),
//   } as CustomButtonProps,
// };
