import React from 'react';
import { Grid, Typography } from '@mui/material';
import { CustomTextField } from './styles';
import { inputGroupProps } from '../../../utils/interface';

const InputGroup: React.FC<inputGroupProps> = ({ inputLabel, inputChange, value }) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="subtitle1">{inputLabel}</Typography>
            </Grid>
            <Grid item xs={12}>
                <CustomTextField
                    variant="outlined"
                    type="text"
                    onChange={inputChange}
                    value={value}
                />
            </Grid>
        </Grid>
    );
}

export default InputGroup;
