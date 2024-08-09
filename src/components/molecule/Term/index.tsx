import React from 'react';
import { Grid } from '@material-ui/core';
import { Text } from '../../atoms/Typography/index';
import { Margin, Padding } from '@mui/icons-material';
import { TypeModuleTypo } from '../../../utils/interfaces';
import { noPadding, gridItem } from './style';

const TypeModule: React.FC<TypeModuleTypo> = ({ texts }) => {
	return (
		<Grid style={noPadding} container spacing={2}>
			<Grid item container xs={12} style={gridItem}>
				<Text variant="subtitle1" text={texts[0]} />
				<Text variant="h6" text={texts[1]} />
			</Grid>
			<Grid item xs={12} container style={gridItem}>
				<Text variant="subtitle1" text={texts[2]} />
				<Text variant="h6" text={texts[3]} />
			</Grid>
		</Grid>
	);
};

export default TypeModule;
