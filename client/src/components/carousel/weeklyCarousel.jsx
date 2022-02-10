import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { getSizeData } from '../../Api/Api';
import { getWeeklyData } from '../../Api/Api';
import SwipeableTextMobileStepper from './carousel';

const getStyleElement = (step) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          // border: 'yellow 3px solid',
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
            color: 'white',
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
            color: '#5E4C5A',
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
      // data={images}
      data={weeklyData}
      // צד שמאל זה השם של הפרופס בסוויפבל - מי שזה נשלח אליו
      //צד ימין זה איך שזה נקרא מהקובץ הזה - שקיבהלתי מהאפ כי הפונקציה במקרה הזה כתובה שם
      returnToMainView={props.returnToMainView}
      getDataStyleElement={getStyleElement}
    />
  );
};

// const getStyleElement1 = (step) => {
//   return (
//     <div
//       style={{
//         wordSpacing: '4px',
//         boxSizing: 'border-box',
//       }}
//     >
//       <p
//         style={{
//           color: '#5E4C5A',
//           whiteSpace: 'pre-wrap',
//           padding: '0 6% 0 6% ',
//         }}
//       >
//         {step.description}
//       </p>
//     </div>
//   );
// };
export default WeeklyCarousel;
