import React from 'react'
import { Typography } from '@mui/material';
import {CustomGrid} from './styles';
import { homeTitleProps } from '../../../utils/interface';
import CustomButton from '../../atoms/Button';
const Hometitle=({mainheading,subheading1,subheading2,moneyicon,buttonvariant,handleGoogleSignIn,googleButtonLabel,githubButtonLabel,handleGithubSignIn}:homeTitleProps)=> {
  return (
            <CustomGrid>
                <Typography variant="subtitle1">
                    {mainheading} <img src={moneyicon} alt="money" />
                </Typography>
                <Typography variant="body1">
                    {subheading1}
                </Typography>
                <Typography variant="body1">
                    {subheading2}
                </Typography>
                <CustomButton variants={buttonvariant} handleButtonClick={handleGoogleSignIn}
                    label={googleButtonLabel} />
                <CustomButton variants={buttonvariant} handleButtonClick={handleGithubSignIn} label={githubButtonLabel}/>
            </CustomGrid>
  )
}
export default Hometitle;