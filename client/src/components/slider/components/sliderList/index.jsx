import React, { useState } from 'react';
import { URL } from '../../../../global.constants';
// import ButtonSlider from '../atoms/buttonSlider';
import { SLIDER_DATA } from '../../constants/slider.constants';

function SliderList() {
  const [slideIndex, setslideIndex] = useState(1);
  const nextSlide = () => {};
  const prevSlide = () => {};

  return (
    <>
      {SLIDER_DATA.map((slide, index) => {
        return (
          <div className="slide">
            <img src={`${URL}/Imgs/img${index + 1}.jpg`} />
          </div>
        );
      })}
    </>
  );
}

export default SliderList;
