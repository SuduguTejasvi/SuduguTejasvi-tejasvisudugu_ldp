import theme from '../../themes/index';
export interface CustomButtonProps {
	label: string;
	disabled?: boolean;
	type: 'outlined' | 'contained';
	onClick: () => void; // Corrected type to camel case
}
export interface IconProps {
	source: string;
}
export interface SliderComponentProps {
	value: number;
	onChange: (event: Event, newValue: number | number[]) => void;
}
export interface TextProps {
	variant: 'h4' | 'h6' | 'subtitle1';
	text: string;
}
export interface TypeModuleTypo {
	texts: string[];
}

export interface TitleProps {
	text: string;
	source: string;
}
export interface SummaryProps {
	initialValue: number;
}
export interface SummaryTemplateProps {
	children: any;
}
