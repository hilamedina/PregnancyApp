import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getSizeData } from '../../Api/Api';

// import Carousel from './carousel';
import SwipeableTextMobileStepper from './carousel';

// const images = [
//   {
//     label: 'Baby at 1 Week',
//     photo:
//       'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-1.png?width=236',
//     description: 'Hila',
//     cm: 'No baby yet',
//   },
//   {
//     label: 'Baby at 2 Weeks',
//     photo:
//       'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-1.png?width=236',
//     description: 'Hila',
//     cm: 'No baby yet',
//   },
//   {
//     label: 'Baby at 3 Weeks',
//     photo:
//       'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-3.png?width=236',
//     description: 'Hila',
//     cm: "Baby's super tiny",
//   },
//   {
//     label: 'Baby at 4 Weeks',
//     photo:
//       'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-4.png?width=236',
//     description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
//     cm: "Baby's super tiny",
//   },
//   {
//     label: 'Baby at 5 Weeks',
//     photo:
//       'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-5.png?width=236',
//     description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
//     cm: "Baby's super tiny",
//   },
//   {
//     label: 'Baby at 6 Weeks',
//     photo:
//       'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-6.png?width=236',
//     description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
//     cm: '0.51 - 0.64 cm ',
//   },
//   {
//     label: 'Baby at 7 Weeks',
//     photo:
//       'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-7.png?width=236',
//     description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
//     cm: '0.64 cm ',
//   },
//   {
//     label: 'Baby at 8 Weeks',
//     photo:
//       'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-8.png?width=236',
//     description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
//     cm: '1.27 cm ',
//   },
//   {
//     label: 'Baby at 9 Weeks',
//     photo:
//       'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-9.png?width=236',
//     description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
//     cm: '2.54 cm',
//   },
//   {
//     label: 'Baby at 10 Weeks',
//     photo:
//       'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-10.png?width=236',
//     description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
//     cm: '3 - 4 cm',
//   },
//   {
//     label: 'Baby at 11 Weeks',
//     photo:
//       'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-11.png?width=141',
//     description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
//     cm: '4 cm, 7 grams',
//   },
//   {
//     label: 'Baby at 12 Weeks',
//     photo:
//       'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-12.png?width=141',
//     description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
//     cm: '5 - 6 cm, 14 gram ',
//   },
//   {
//     label: 'Baby at 13 Weeks',
//     photo:
//       'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-13.png?width=236',
//     description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
//     cm: '8 cm, 28 grams ',
//   },
// ];

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
            // margin: 'auto',
            // border: 'green 2px solid',
            width: '150px',
            height: '100px',
            color: '#5E4C5A',
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
            // fontWeight: 'bold',
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

const sizeCarousel = (props) => {
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

export default sizeCarousel;
