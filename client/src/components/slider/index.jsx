import React from 'react';
import ButtonSlider from './components/atoms/buttonSlider';
import SliderList from './components/sliderList';
import './slider.css';

function Slider(moveSlide, direction) {
  return (
    <div className="containe-slider">
      <SliderList />
      {/* <ButtonSlider moveSlide={nextSlide} direction="next" /> */}
      {/* <ButtonSlider moveSlide={prevSlide} direction="prev" /> */}
    </div>
  );
}

export default Slider;
