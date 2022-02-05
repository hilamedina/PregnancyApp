import React from 'react';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';
// import { fontSize, fontWeight } from '@mui/system';

const btn = () => {
  return (
    <>
      <Button
        style={{
          padding: '25px',
          border: '2px solid',
          borderRadius: '10px',
          color: '#AC92A6',
          fontWeight: 'bold',
          // bgColor: '#E9FAE3',
        }}
        variant="outlined"
        startIcon={<CalendarViewMonthIcon />}
      >
        Appointment
      </Button>

      <Button
        style={{
          padding: '25px',
          border: '2px solid',
          borderRadius: '10px',
          color: '#AC92A6',
          fontWeight: 'bold',
          // bgColor: '#E9FAE3',
        }}
        variant="outlined"
        startIcon={<MonitorWeightOutlinedIcon />}
      >
        My Weigth
      </Button>
      <Button
        style={{
          padding: '25px',
          border: '2px solid',
          borderRadius: '10px',
          color: '#AC92A6',
          fontWeight: 'bold',
          // bgColor: '#E9FAE3',
        }}
        variant="outlined"
        startIcon={<FormatListBulletedSharpIcon />}
      >
        To Do
      </Button>
    </>
  );
};

export default btn;
