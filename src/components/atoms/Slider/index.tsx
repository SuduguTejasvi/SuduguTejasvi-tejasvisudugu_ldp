import React from 'react';
import { Slider, ThemeProvider } from '@mui/material';
import Theme from '../../../themes/index';
import { SliderComponentProps } from '../../../utils/interfaces';

const SliderComponent: React.FC<SliderComponentProps> = ({
	value,
	onChange
}) => {
	return (
		<ThemeProvider theme={Theme}>
			<Slider value={value} onChange={onChange} min={0} max={880000} />
		</ThemeProvider>
	);
};

export default SliderComponent;
