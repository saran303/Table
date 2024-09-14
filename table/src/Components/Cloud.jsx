import React from 'react';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import { SvgIcon } from '@mui/material';

const ReversedFilterDramaOutlinedIcon = (props) => {
  return (
    <SvgIcon {...props} component={FilterDramaOutlinedIcon} sx={{ transform: 'scaleX(-1)' }} />
  );
};

export default ReversedFilterDramaOutlinedIcon;
