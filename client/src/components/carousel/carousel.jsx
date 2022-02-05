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

function SwipeableTextMobileStepper(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.data.length;

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
  const getGalleryItem = (activeStep, step, index) => {
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
            {props.getDataStyleElement(step)}
          </Box>
        </>
      );
    }

    return null;
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
              {props.data[activeStep].label}
            </Typography>
          </Paper>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {props.data.map((step, index) => (
              <div key={'' + index}>
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
      {/* האון קליל מקבל את השם שנשלח אליו מסייז קרוסל */}
      <button onClick={props.returnToMainView}>Back</button>
    </div>
  );
}
export default SwipeableTextMobileStepper;
