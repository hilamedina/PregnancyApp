import React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import { calendarView, sizeView } from '../../App';
import MainBtn from './mainBtn';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';
// import { fontSize, fontWeight } from '@mui/system';

const mainBtnScreen = (props) => {
  return (
    <>
      <MainBtn
        onClick={() => props.changeView(calendarView)}
        startIcon={<CalendarViewMonthIcon />}
        name={'Appointment'}
      />
      <MainBtn
        onClick={() => {
          props.changeView(sizeView);
        }}
        startIcon={<FormatListBulletedSharpIcon />}
        name={'size'}
      />
      <MainBtn
        onClick={() => {
          // props.changeView(sizeView);
        }}
        startIcon={<FormatListBulletedSharpIcon />}
        name={'To Do'}
      />
      <MainBtn
        onClick={() => {
          // props.changeView(sizeView);
        }}
        startIcon={<MonitorWeightOutlinedIcon />}
        name={'My Weigth'}
      />
    </>
  );
};

export default mainBtnScreen;
