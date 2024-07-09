import { Theme,createTheme } from "@mui/material";

export const theme=createTheme({
    typography:{
        h3:{

            fontFamily:'MontSerrat',
            fontSize:'20px',
            fontWeight:500,
            lineHeight:'30px',
            textAlign:'left',
            color:'#373C38'


        },
        h4:{
            fontFamily:'MontSerrat',
            fontSize:'12px',
            fontWeight:500,
            lineHeight:'16px',
            textAlign:'left',
            color:'#FF725E'

        },
        h6:{
            fontFamily:'MontSerrat',
            fontSize:'12px',
            fontWeight:500,
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
