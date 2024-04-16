import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Contents.css'
import img1 from '../imgs/smallSlider/Asset 1.svg'
import img2 from '../imgs/smallSlider/Asset 2.svg'
import img3 from '../imgs/smallSlider/Asset 3.svg'
import img4 from '../imgs/smallSlider/Asset 4.svg'
import img5 from '../imgs/smallSlider/Asset 5.svg'
import img6 from '../imgs/smallSlider/Asset 6.svg'


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    
  };

  return (
    <Slider {...settings} className='imgSlider'>
      <div className='imgSlideDiv'>
        <img src={img1} alt="" className='imgSlideImage'/>
      </div>
      <div className='imgSlideDiv'>
        <img src={img2} alt="" className='imgSlideImage'/>
      </div>
      <div className='imgSlideDiv'>
        <img src={img3} alt="" className='imgSlideImage'/>
      </div>
      <div className='imgSlideDiv'>
        <img src={img4} alt="" className='imgSlideImage'/>
      </div>
      <div className='imgSlideDiv'>
        <img src={img5} alt="" className='imgSlideImage'/>
      </div>
      <div className='imgSlideDiv'>
        <img src={img6} alt="" className='imgSlideImage'/>
      </div>
    </Slider>
  );
};

export default ImageSlider;
