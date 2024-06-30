import React from 'react';
import Slider from 'react-slick';
import c1 from '../c1.jpg';
import c2 from '../c2.jpg';
import c3 from '../c3.jpg';
import c4 from '../c4.jpg';
import c5 from '../c5.jpg';
import c6 from '../c6.jpg';

const Home2 = () => {
  const slide = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const images = [
    c1,
    c2,
    c3,
    c4,
    c5,
    c6
  ];

  return (
    <div className="slider-container">
      <Slider {...slide}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home2;
