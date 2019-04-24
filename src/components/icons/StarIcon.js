import React from 'react';
import PropTypes from 'prop-types';

const StarIcon = (props) => {
  const { width, height, fill } = props;

  return (
    <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 88 88' width={width} height={height}>
      <polygon
        points='44,0 55.939,33.612 88,33.612 61.842,53.351 71.193,88 44,67.226 16.809,88 26.158,53.351 0,33.612 32.061,33.612'
        fill={fill} />
    </svg>
  );
}

StarIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

StarIcon.defaultProps = {
  width: 12,
  height: 12,
  fill: '#CCCCCC',
};

export default StarIcon;