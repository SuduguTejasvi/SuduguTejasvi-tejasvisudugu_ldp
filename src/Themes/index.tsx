<<<<<<< HEAD
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  typography: {
    h4: {
      fontFamily: 'Gilroy',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '29.4px',
      letterSpacing: '-0.005em',
      textAlign: 'left',
      color: 'white',
    },
    h6: {
      fontFamily: 'Gilroy',
      fontWeight: 100,
      fontSize: '12px',
      lineHeight: '22.4px',
      color: '#B2BEB5',
    },
    subtitle1: {
      fontFamily: 'Gilroy',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '22.4px',
      color: 'white',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: '100px',
          height: '35px',
        },
        contained: {
          '&:hover': {
            backgroundColor: '#6C5DD3',
            color: 'white',
          },
          '&:active': {
            backgroundColor: '#6C5DD3',
            color: 'white',
          },
          backgroundColor: '#6C5DD3',
          color: 'white',
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
            backgroundColor: '#2D2D30',
            color: 'white',
            border: '0px',
          },
          '&:active': {
            backgroundColor: '#2D2D30',
            color: 'white',
            border: '0px',
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    error:{
      main: '#FF0000',
    }
  },
});
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6C5DD3',
    },
  },
  typography: {
    h4: {
      fontFamily: 'Gilroy',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '29.4px',
      letterSpacing: '-0.005em',
      textAlign: 'left',
      color: 'black',
    },
    h6: {
      fontFamily: 'Gilroy',
      fontWeight: 100,
      fontSize: '12px',
      lineHeight: '22.4px',
      color: 'black',
    },
    subtitle1: {
      fontFamily: 'Gilroy',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '22.4px',
      color: 'black',
    },
  },
});


=======
import { Theme,createTheme } from "@mui/material";

export const theme=createTheme({
    typography:{
        h3:{

            fontFamily:'MontSerrat',
            fontSize:'20px',
            fontWeight:'600',
            lineHeight:'30px',
            textAlign:'left',
            color:'#373C38'

        },
        h4:{
            fontFamily:'MontSerrat',
            fontSize:'12px',
            fontWeight:'500',
            lineHeight:'16px',
            textAlign:'left',
            color:'#FF725E'

        },
        h6:{
            fontFamily:'MontSerrat',
            fontSize:'12px',
            fontWeight:'500',
            lineHeight:'16px',
            textAlign:'left',
            color:'#656E66'

        },
        subtitle1:{
            fontFamily:'MontSerrat',
            fontSize:'12px',
            fontWeight:700,
            lineHeight:'16px',
            textAlign:'left',
            color:'#656E66'

        }

    }
})
>>>>>>> 0d091b39844ce777c69b8f5a8a99c359d5b5068d
