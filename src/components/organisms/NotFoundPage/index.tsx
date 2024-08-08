import React from "react";
import { Typography ,Box} from "@mui/material";
import Text from "../../atoms/Typography"; 
import {PAGE_NOT_FOUND_MSG} from "../../../utils/constants"
const NotFound: React.FC = () => {
    return (
        <Box>
            <Text variants="h6" text={PAGE_NOT_FOUND_MSG} />
        </Box>
    );
}

export default NotFound;
