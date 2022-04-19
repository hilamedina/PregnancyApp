import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getWeeklyData } from '../../Api/Api';
import SwipeableTextMobileStepper from './carousel';
import '../slider/slider.css';
const getStyleElement = (step) => {
  return (
    <>
      <div
        style={{
          wordSpacing: '4px',
          boxSizing: 'border-box',
        }}
      >
        <br />
        <br />
        <p
          style={{
            color: 'black',
            whiteSpace: 'pre-wrap',
            padding: '0 6% 0 6% ',
          }}
        >
          {step.description}
        </p>
      </div>
    </>
  );
};

const WeeklyCarousel = (props) => {
  const [weeklyData, setWeeklyData] = useState([]);
  useEffect(() => {
    getWeeklyData(setWeeklyData);
  }, []);
  return (
    <SwipeableTextMobileStepper
      data={weeklyData}
      returnToMainView={props.returnToMainView}
      getDataStyleElement={getStyleElement}
    />
  );
};

export default WeeklyCarousel;
