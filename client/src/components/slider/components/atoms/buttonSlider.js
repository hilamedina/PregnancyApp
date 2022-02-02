import React from 'react';
import '../../../slider/slider.css';
// import '../components/slider/slider.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ButtonSlider() {
  return (
    <div>
      <button className="btn-slide">
        <img src={ArrowForwardIcon}></img>
      </button>
    </div>
  );
}

export default ButtonSlider;
