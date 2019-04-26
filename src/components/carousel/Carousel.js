import React from 'react';
import PropTypes from 'prop-types';
import KEYS from '../../utils/labels';

import { Carousel } from 'react-responsive-carousel';

const CarouselGallery = (props) => {
  const { images, smallView } = props;

  const imagesList = images.map(({src600, src1000}, index) => {
    const url = `http://${smallView ? src600 : src1000}`;
    return (<img key={index} src={url} alt={`${KEYS.IMAGES_ALT} ${index}`}/>);
  }).reverse();

  const carouselProps = {
    showArrows: false,
    showStatus: false,
    showThumbs: !smallView,
    autoPlay: smallView,
    interval: 5000,
    infiniteLoop: true,
    showIndicators: smallView,
  };

  return (
    <Carousel className="carousel-container" { ...carouselProps }>
      { imagesList }
    </Carousel>
  );
}

CarouselGallery.propTypes = {
  images: PropTypes.array,
  smallView: PropTypes.bool,
};

CarouselGallery.defaultProps = {
  images: [
    'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
    'https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg',
    'http://climatecommunication.yale.edu/wp-content/uploads/2017/04/001-stone-circle-jpeg-768x350.jpg',
  ],
  smallView: false,
};

export default CarouselGallery;
