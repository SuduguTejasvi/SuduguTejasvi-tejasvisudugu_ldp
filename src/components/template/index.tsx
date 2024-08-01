import React from "react";
import { CustomBox } from "./styles";
import {financeTrackerTemplate} from "../../utils/interface"
const FinanceTrackerTemplate: React.FC<financeTrackerTemplate> = ({ children }) => {
    return (
        <CustomBox>
            {children}
        </CustomBox>
    );
};

export default FinanceTrackerTemplate;
