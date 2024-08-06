import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Test Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Test Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300" alt="Test Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default TestSlider;
