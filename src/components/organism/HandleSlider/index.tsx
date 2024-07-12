import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Text } from '../../atoms/Typography';
import CustomButton from '../../atoms/Button';
import SummaryTitle from '../../molecule/Title';
import SliderComponent from '../../atoms/Slider';

import TypeModule from '../../molecule/Term';
import { container, ItemFormat } from './style';
import { SummaryProps } from '../../../utils/interfaces';

const Summary: React.FC<SummaryProps> = ({ initialValue }) => {
	const [sliderValue, setSliderValue] = useState(initialValue);

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		if (typeof newValue === 'number') setSliderValue(newValue);
	};

	const handleReset = () => {
		setSliderValue(0);
	};

	const payBackAmount = sliderValue.toLocaleString();
	const rate = (0.12 * sliderValue).toFixed(2);
	const rateAsNumber = parseFloat(rate);
	const totalPayout = (sliderValue - rateAsNumber).toFixed(2);

	return (
		<Grid container direction="column" spacing={2} style={container}>
			<Grid item>
				<SummaryTitle text="Summary" source="/asserts/images/info-circle.svg" />
			</Grid>
			<TypeModule texts={['Term:', '12 months', 'Selected Contracts', '3']} />
			<Grid item container style={ItemFormat}>
				<Grid item xs={6}>
					<Text variant="h6" text="Slide to autoselect" />
				</Grid>
				<Grid item xs={6} style={{ textAlign: 'right' }}>
					<CustomButton
						label="RESET"
						disabled={false}
						type={'outlined'}
						onClick={handleReset}
					/>
				</Grid>
			</Grid>
			<Grid item>
				<SliderComponent value={sliderValue} onChange={handleSliderChange} />
			</Grid>
			<Grid item container style={ItemFormat}>
				<Grid item xs={12}>
					<Text
						variant="subtitle1"
						text={`${sliderValue.toLocaleString()} selected of $880,000.00`}
					/>
				</Grid>
			</Grid>
			<TypeModule
				texts={[
					'Pay back amount:',
					`$${payBackAmount}`,
					'Rate%',
					`(12.00%) $${rate}`
				]}
			/>
			<Grid item style={{ textAlign: 'center' }}>
				<Text variant="h6" text={`Total Payout $${totalPayout}`} />
				<CustomButton
					label="REVIEW YOUR CREDIT"
					disabled={sliderValue === 0}
					type={'contained'}
					onClick={() => {
						alert('Review your credit');
					}}
				/>
			</Grid>
		</Grid>
	);
};

export default Summary;
