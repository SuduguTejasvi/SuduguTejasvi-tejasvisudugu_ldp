import React from 'react';
// import { InfoOutlined } from '@material-ui/icons';
import { useStyles } from './style';
import { IconProps } from '../../../utils/interfaces';
export const Icon = ({ source }: IconProps) => {
	return <img src={source} />;
};
