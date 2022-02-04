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
// import { autoPlay } from 'react-swipeable-views-utils';
// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Baby at 1 Week',
    photo:
      'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-1.png?width=236',
    description: 'Hila',
    cm: 'No baby yet',
  },
  {
    label: 'Baby at 2 Weeks',
    photo:
      'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-1.png?width=236',
    description: 'Hila',
    cm: 'No baby yet',
  },
  {
    label: 'Baby at 3 Weeks',
    photo:
      'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-3.png?width=236',
    description: 'Hila',
    cm: "Baby's super tiny",
  },
  {
    label: 'Baby at 4 Weeks',
    photo:
      'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-4.png?width=236',
    description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
    cm: "Baby's super tiny",
  },
  {
    label: 'Baby at 5 Weeks',
    photo:
      'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-5.png?width=236',
    description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
    cm: "Baby's super tiny",
  },
  {
    label: 'Baby at 6 Weeks',
    photo:
      'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-6.png?width=236',
    description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
    cm: '0.51 - 0.64 cm ',
  },
  {
    label: 'Baby at 7 Weeks',
    photo:
      'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-7.png?width=236',
    description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
    cm: '0.64 cm ',
  },
  {
    label: 'Baby at 8 Weeks',
    photo:
      'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-8.png?width=236',
    description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
    cm: '1.27 cm ',
  },
  {
    label: 'Baby at 9 Weeks',
    photo:
      'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-9.png?width=236',
    description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
    cm: '2.54 cm',
  },
  {
    label: 'Baby at 10 Weeks',
    photo:
      'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-10.png?width=236',
    description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
    cm: '3 - 4 cm',
  },
  {
    label: 'Baby at 11 Weeks',
    photo:
      'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-11.png?width=141',
    description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
    cm: '4 cm, 7 grams',
  },
  {
    label: 'Baby at 12 Weeks',
    photo:
      'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-12.png?width=141',
    description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
    cm: '5 - 6 cm, 14 gram ',
  },
  {
    label: 'Baby at 13 Weeks',
    photo:
      'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-13.png?width=236',
    description: `While the only type of social media you've considere posting lately is Morning Sickness Lasts All Day, that baby you are growing is already becoming social-media-savvy.\n Though it might be a while before he steals your iPad or schools you on the latest app that all the toddlers are babbling about, right now, he is the size of the hashtag you type on your phone.\n That means he is ⅛ of an inch long and about 0.04 ounces.\n If you want to tell him about what is trending on Twitter, go ahead, his ear canals are forming now and his heart is pumping blood and beating at about 80 times a minute. `,
    cm: '8 cm, 28 grams ',
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          flexGrow: 1,
        }}
      >
        <div
          style={{
            backgroundColor: '#DEE8D5',
            border: '2px black solid',
            borderRadius: '10px',
          }}
        >
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              width: 375,
              pl: 2,
              bgcolor: '#DEE8D5',
            }}
          >
            <Typography style={{ color: '#5E4C5A', margin: 'auto' }}>
              {images[activeStep].label}
            </Typography>
          </Paper>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {getGalleryItem(activeStep, step, index)}
              </div>
            ))}
          </SwipeableViews>
        </div>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              style={{ color: '#5E4C5A' }}
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
              style={{ color: '#5E4C5A' }}
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
function getGalleryItem(activeStep, step, index) {
  if (Math.abs(activeStep - index) <= 2) {
    return (
      <>
        <Box
          sx={{
            height: '500px',
            display: 'block',
            maxWidth: '100%',
            overflow: 'hidden',
            width: '100%',
          }}
        >
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
        </Box>
      </>
    );
  }

  return null;
}

export default SwipeableTextMobileStepper;
