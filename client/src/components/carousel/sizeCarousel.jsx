import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getSizeData } from '../../Api/Api';
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
      data={sizeData}
      returnToMainView={props.returnToMainView}
      getDataStyleElement={getStyleElement}
    />
  );
};

export default SizeCarousel;

//       // צד שמאל זה השם של הפרופס בסוויפבל - מי שזה נשלח אליו
//       //צד ימין זה איך שזה נקרא מהקובץ הזה - שקיבהלתי מהאפ כי הפונקציה במקרה הזה כתובה שם
//       returnToMainView={props.returnToMainView}
//       getDataStyleElement={getStyleElement1}
// project.id.title
