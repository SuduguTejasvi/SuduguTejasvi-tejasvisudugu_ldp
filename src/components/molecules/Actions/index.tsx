import React from 'react';
import { IconButton, Box } from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';
import { dataactionsprops,iconButtonColor } from '../../../utils/interfaces';
import { COLOR_PRIMARY,COLOR_SECONDARY,COLOR_ERROR,GET_DATA,UPDATE_DATA,DELETE_DATA } from '../../../utils/constants';

const DataActions: React.FC<dataactionsprops> = ({
  handleGetBooksData,
  handleUpdateBooksData,
  handleDeleteBooksData,
}) => {
  const actions = [
    { action: handleGetBooksData, color:COLOR_PRIMARY as iconButtonColor, label:GET_DATA, icon: <Visibility /> },
    { action: handleUpdateBooksData, color:COLOR_SECONDARY as iconButtonColor, label:UPDATE_DATA, icon: <Edit /> },
    { action: handleDeleteBooksData, color:COLOR_ERROR as iconButtonColor, label:DELETE_DATA, icon: <Delete /> },
  ];

  return (
    <Box>
      {actions.map(({ action, color, label, icon }) => (
        <IconButton key={label} onClick={action} aria-label={label} color={color}>
          {icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default DataActions;
