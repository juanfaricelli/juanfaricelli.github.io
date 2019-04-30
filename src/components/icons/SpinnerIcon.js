import React from 'react';
import PropTypes from 'prop-types';

const SpinnerIcon = (props) => {
  const { width, height, fill } = props;

  return (
    <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' className='spinner-loading'>
        <circle cx='50' cy='50' fill='none' strokeLinecap='round' r='27' strokeWidth='7' stroke={fill} strokeDasharray='42.411500823462205 42.411500823462205' transform='rotate(60 50 50)'>
          <animateTransform attributeName='transform' type='rotate' calcMode='linear' values='0 50 50;360 50 50' keyTimes='0;1' dur='1s' begin='0s' repeatCount='indefinite' />
        </circle>
    </svg>
  );
}

SpinnerIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

SpinnerIcon.defaultProps = {
  width: 80,
  height: 80,
  fill: '#444444',
};

export default SpinnerIcon;