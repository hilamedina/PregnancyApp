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
        <div className="carousle.conti" style={{ marginBottom: '100px' }}>
          <Box
            sx={{
              height: '400px',
              display: 'block',
              maxWidth: '100%',
              overflow: 'hidden',
              width: '100%',
            }}
          >
            {props.getDataStyleElement(step)}
          </Box>
        </div>
      );
    }

    return null;
  };

  if (!props.data || props.data.length < 1) {
    return <div />;
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: 470,
          flexGrow: 1,
        }}
      >
        <div
          style={{
            marginTop: '100px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '30px',
            opacity: 1,
          }}
        >
          <Paper
            //   square
            //   elevation={0}
            sx={{
              //     display: 'flex',
              //     alignItems: 'center',
              //     height: 50,
              //     width: 375,

              //     pl: 2,
              //     marginRight: '20px',
              //     border: 'none',
              backgroundColor: 'rgba(206,205,201,0.3)',
            }}
          >
            {/* <Typography> */}
            {/* <Typography style={{ color: '#5E4C5A', margin: 'auto' }}> */}
            {/* </Typography> */}
            {props.data[activeStep].label}
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
          variant="progress"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          style={{ backgroundColor: 'transparent' }}
          nextButton={
            <Button
              style={{ color: 'white', fontWeight: 'bold' }}
              size="large"
              onClick={handleNext}

              // disabled={activeStep === maxSteps - 1}
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
              style={{ color: 'white', fontWeight: 'bold' }}
              size="large"
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
      <button
        style={{ witdth: '20px', height: '20px', display: 'flex' }}
        onClick={props.returnToMainView}
      >
        Back
      </button>
    </div>
  );
}
export default SwipeableTextMobileStepper;
