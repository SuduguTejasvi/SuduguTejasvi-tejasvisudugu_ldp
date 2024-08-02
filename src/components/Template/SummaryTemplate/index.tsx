import * as React from 'react';
import Box from '@mui/material/Box';
import { gridLayout } from './styles';
import { SummaryTemplateProps } from '../../../utils/interfaces';
export default function SummaryTemplate({ children }: SummaryTemplateProps) {
	return <Box style={gridLayout}>{children}</Box>;
}
