import React from 'react';
import { ThemeProvider, Typography } from '@material-ui/core';

import { TextProps } from '../../../utils/interfaces';
import {Theme} from '../../../themes/index';

export const Text: React.FC<TextProps> = ({ variant, text }) => {
	return<>
	<ThemeProvider theme={Theme}>
	<Typography variant={variant}>{text}</Typography>

	</ThemeProvider>
	
	</>
	 
};
