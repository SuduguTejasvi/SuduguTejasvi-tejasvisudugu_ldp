import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	button: {
		color: 'white',
		backgroundColor: '#6C5DD3',
		'&:hover': {
			backgroundColor: '#5B4CB3'
		},
		width: '276px',
		height: '59px'
	}
}));
