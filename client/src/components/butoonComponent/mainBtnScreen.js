import React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import {
  calendarView,
  sizeView,
  weeklyView,
  todoView,
  myWeightView,
  loginView,
} from '../../App';
import MainBtn from './mainBtn';
import { ClassNames } from '@emotion/react';
import '../butoonComponent/btn.css';

const mainBtnScreen = (props) => {
  return (
    <div className="btn">
      <div>
        <MainBtn
          onClick={() => props.changeView(calendarView)}
          name={'Appointment'}
        />
        <MainBtn
          onClick={() => {
            props.changeView(loginView);
          }}
          name={'login'}
        />
      </div>
      <div>
        <MainBtn
          onClick={() => {
            props.changeView(todoView);
          }}
          name={'To Do'}
        />
        <MainBtn
          onClick={() => {
            props.changeView(weeklyView);
          }}
          name={'Weekly'}
        />
      </div>
      <div>
        <MainBtn
          onClick={() => {
            props.changeView(myWeightView);
          }}
          name={'My Weigth'}
        />
        <MainBtn
          onClick={() => {
            props.changeView(sizeView);
          }}
          name={'Baby Size'}
        />
      </div>
    </div>
  );
};

export default mainBtnScreen;
