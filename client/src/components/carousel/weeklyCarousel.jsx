import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { getSizeData } from '../../Api/Api';
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
            // border: '2px solid red',
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
