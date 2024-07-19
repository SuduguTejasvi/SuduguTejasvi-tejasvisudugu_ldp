import React from "react";
import Text from "../../atoms/Typography";
import { CustomBox } from "./styles";
import {customheaderprops} from '../../../utils/interfaces';
import { IconButton } from "@mui/material";
import { Add } from '@mui/icons-material';
import { COLOR_SUCCESS,TYPOGRAPHY_VARIANT_H4,ARIA_LABEL_ADD } from "../../../utils/constants";

const CustomHeader:React.FC<customheaderprops>=({headerTitle,handleAddBooksData})=>{
    return(
        <CustomBox>
            <Text variants={TYPOGRAPHY_VARIANT_H4} text={headerTitle}/>
            <IconButton aria-label={ARIA_LABEL_ADD} onClick={handleAddBooksData} color={COLOR_SUCCESS}>
                 <Add />
            </IconButton>
        </CustomBox>
    )
}
export default CustomHeader;