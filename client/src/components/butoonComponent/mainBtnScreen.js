import React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import { calendarView, sizeView, weeklyView, todoView } from '../../App';
import MainBtn from './mainBtn';
import { ClassNames } from '@emotion/react';
import '../butoonComponent/btn.css';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';
// import { fontSize, fontWeight } from '@mui/system';

const mainBtnScreen = (props) => {
  return (
    <div className="btn">
      <div>
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
      </div>
      <div>
        <MainBtn
          onClick={() => {
            // props.changeView(sizeView);
          }}
          onClick={() => {
            props.changeView(todoView);
          }}
          startIcon={<FormatListBulletedSharpIcon />}
          name={'To Do'}
        />
        <MainBtn
          onClick={() => {
            props.changeView(weeklyView);
          }}
          startIcon={<FormatListBulletedSharpIcon />}
          name={'weekly'}
        />
      </div>
      <div>
        <MainBtn
          onClick={() => {
            // props.changeView(sizeView);
          }}
          startIcon={<MonitorWeightOutlinedIcon />}
          name={'My Weigth'}
        />
        <MainBtn
          onClick={() => {
            // props.changeView(sizeView);
          }}
          startIcon={<MonitorWeightOutlinedIcon />}
          name={'My Weigth'}
        />
      </div>
    </div>
  );
};

export default mainBtnScreen;
