import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'week1',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'week2',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'week3',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'week4',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      return setActiveStep(0);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      return setActiveStep(maxSteps - 1);
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            width: 375,
            pl: 2,
            bgcolor: 'background.default',
            border: 'red 2px solid',
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    border: 'blue 2px solid',
                    height: 520,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          style={{ border: 'red 2px solid' }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  );
}

export default SwipeableTextMobileStepper;
// import React, { useState } from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
// import { height } from '@mui/system';

// const images = [
//   {
//     label: 'week1',
//     imgPath:
//       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'week2',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'week3',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
//   },
//   {
//     label: 'week4',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'week5',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// function SwipeableTextMobileStepper() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     if (activeStep === maxSteps - 1) {
//       return setActiveStep(0);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     if (activeStep === 0) {
//       return setActiveStep(maxSteps - 1);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <div
//       style={{
//         width: '100vw',
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Box
//         sx={{
//           maxWidth: 400,
//           flexGrow: 1,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           margin: 0,
//         }}
//       >
//         <Paper
//           square={false}
//           elevation={0}
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             height: 50,
//             bgcolor: 'background.default',
//             margin: 0,
//           }}
//         >
//           <Typography>{images[activeStep].label}</Typography>
//         </Paper>
//         <AutoPlaySwipeableViews
//           axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//           index={activeStep}
//           onChangeIndex={handleStepChange}
//           enableMouseEvents
//           style={{
//             width: '100%',
//             height: '100%',
//             display: 'flex',
//             justifyContent: 'center',
//           }}
//         >
//           {images.map((step, index) => (
//             <div key={step.label}>
//               {Math.abs(activeStep - index) <= 2 ? (
//                 <Box
//                   component="img"
//                   sx={{
//                     height: 450,
//                     borderRadius: 10,
//                     display: 'block',

//                     margin: 0,
//                     maxWidth: 300,
//                     width: '100%',
//                   }}
//                   src={step.imgPath}
//                   alt={step.label}
//                 />
//               ) : null}
//             </div>
//           ))}
//         </AutoPlaySwipeableViews>
//         <MobileStepper
//           steps={maxSteps}
//           position="static"
//           activeStep={activeStep}
//           nextButton={
//             <Button size="small" onClick={handleNext}>
//               Next
//               {theme.direction === 'rtl' ? (
//                 <KeyboardArrowLeft />
//               ) : (
//                 <KeyboardArrowRight />
//               )}
//             </Button>
//           }
//           backButton={
//             <Button size="small" onClick={handleBack}>
//               {theme.direction === 'rtl' ? (
//                 <KeyboardArrowRight />
//               ) : (
//                 <KeyboardArrowLeft />
//               )}
//               Back
//             </Button>
//           }
//         />
//       </Box>
//     </div>
//   );
// }

// export default SwipeableTextMobileStepper;
