import React from 'react';
import { Button, ThemeProvider } from '@mui/material';
import { useStyles } from './style';
import Theme from '../../../themes';

import { CustomButtonProps } from '../../../utils/interfaces';
const CustomButton: React.FC<CustomButtonProps> = ({
	label,
	disabled,
	type,
	onClick
}) => {
	return (
		<ThemeProvider theme={Theme}>
			<Button disabled={disabled} variant={type} onClick={onClick}>
				{label}
			</Button>
		</ThemeProvider>
	);
};

export default CustomButton;
