import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getSizeData } from '../../Api/Api';
// import { getWeeklyData } from '../../Api/Api';

import SwipeableTextMobileStepper from './carousel';

const getStyleElement = (step) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <img
          style={{
            width: '150px',
            height: '120px',
          }}
          src={step.photo}
          alt={step.label}
        ></img>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '150px',
            height: '100px',
            color: 'black',
            marginRight: '10px',
          }}
        >
          {step.cm}
        </div>
      </div>
      <div
        style={{
          wordSpacing: '4px',
          boxSizing: 'border-box',
        }}
      >
        <p
          style={{
            color: 'black',
            whiteSpace: 'pre-wrap',
            padding: '0 6% 0 6% ',
            // fontWeight: 'bold',
          }}
        >
          {step.description}
        </p>
      </div>
    </>
  );
};

const SizeCarousel = (props) => {
  const [sizeData, setSizeData] = useState([]);
  useEffect(() => {
    getSizeData(setSizeData);
  }, []);
  return (
    <SwipeableTextMobileStepper
      // data={images}
      data={sizeData}
      // צד שמאל זה השם של הפרופס בסוויפבל - מי שזה נשלח אליו
      //צד ימין זה איך שזה נקרא מהקובץ הזה - שקיבהלתי מהאפ כי הפונקציה במקרה הזה כתובה שם
      returnToMainView={props.returnToMainView}
      getDataStyleElement={getStyleElement}
    />
  );
};

// const WeeklyCarousel = (props) => {
//   const [weeklyData, setWeeklyData] = useState([]);
//   useEffect(() => {
//     getWeeklyData(setWeeklyData);
//   }, []);
//   return (
//     <SwipeableTextMobileStepper
//       data={images}
//       data={weeklyData}
//       // צד שמאל זה השם של הפרופס בסוויפבל - מי שזה נשלח אליו
//       //צד ימין זה איך שזה נקרא מהקובץ הזה - שקיבהלתי מהאפ כי הפונקציה במקרה הזה כתובה שם
//       returnToMainView={props.returnToMainView}
//       getDataStyleElement={getStyleElement1}
//     />
//   );
// };

export default SizeCarousel;
