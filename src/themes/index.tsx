import { createTheme } from '@mui/material/styles';


export const Theme = createTheme({
	typography: {
		h4: {
			fontFamily: 'Gilroy',
			fontWeight: 600,
			fontSize: '24px',
			lineHeight: '29.4px',
			letterSpacing: '-0.005em',
			textAlign: 'left',
			color:'white',
		},
		h6: {
			fontFamily: 'Gilroy',
			fontWeight: 700,
			fontSize: '16px',
			lineHeight: '22.4px',
			color:'white',
		},
		subtitle1: {
			fontFamily: 'Gilroy',
			fontWeight: 500,
			fontSize: '16px',
			lineHeight: '22.4px',
			color:'white',
		}
	},
	components: {
		MuiSlider: {
			styleOverrides: {
				rail: {
					backgroundColor: '#6C5DD3'
				},
				thumb: {
					backgroundColor: '#6C5DD3'
				},
				track: {
					backgroundColor: '#6C5DD3'
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				root: {
					width: '276px',
					height: '59px'
				},
				contained: {
					'&:hover': {
						backgroundColor: '#6C5DD3',
						color: 'white'
					},
					'&:active': {
						backgroundColor: '#6C5DD3',
						color: 'white'
					},
					backgroundColor: '#6C5DD3',
					color: 'white'
				},
				outlined: {
					width: '65px',
					height: '31px',
					padding: '6px 12px',
					borderRadius: '12px 0px 0px 0px',
					backgroundColor: '#2D2D30',
					color: 'white',
					border: '0px',
					'&:hover': {
						width: '65px',
						height: '31px',
						padding: '6px 12px',
						borderRadius: '12px 0px 0px 0px',
						backgroundColor: '#2D2D30',
						color: 'white',
						border: '0px'
					},
					'&:active': {
						width: '65px',
						height: '31px',
						padding: '6px 12px',
						borderRadius: '12px 0px 0px 0px',
						backgroundColor: '#2D2D30',
						color: 'white',
						border: '0px'
					}
				}
			}
		}
	},
	palette: {
		mode: 'dark' // Set the theme mode to dark
	}
});

export default Theme;

// export const Theme = createTheme({
// 	typography: {
// 		h4: {
// fontFamily: 'Gilroy',
// fontWeight: 600,
// fontSize: '24px',
// lineHeight: '29.4px',
// letterSpacing: '-0.005em',
// textAlign: 'left'
// 			// color: 'red'
// 		},
// 		h6: {
// fontFamily: 'Gilroy',
// fontWeight: 700,
// fontSize: '16px',
// lineHeight: '22.4px'
// 		},
// 		subtitle1: {
// fontFamily: 'Gilroy',
// fontWeight: 500,
// fontSize: '16px',
// lineHeight: '22.4px'
// 		}
// 	}
// });

// background: #E8E7F0;

// //styleName: heading 2;
// font-family: Gilroy;
// font-size: 24px;
// font-weight: 600;
// line-height: 29.4px;
// letter-spacing: -0.005em;
// text-align: left;
