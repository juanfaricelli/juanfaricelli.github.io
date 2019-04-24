import React from 'react';
import PropTypes from 'prop-types';

import StarIcon from '../icons/StarIcon';

const FIVE_STARS = 5;
const COLOR_TUNDORA = '#444444';
const COLOR_SILVER = '#CCCCCC';

const RatingComponent = (props) => {
  const { blackStars } = props;
  let ratingBar = [];

  for (let index = 0; index < FIVE_STARS; index++) {
    ratingBar.push(<StarIcon key={index} fill={ blackStars > index ? COLOR_TUNDORA : COLOR_SILVER } />);
  }

  return (
    <span className={ `rating-container` }>
      { ratingBar }
    </span>
  );
}

RatingComponent.propTypes = {
  blackStars: PropTypes.number,
};

RatingComponent.defaultProps = {
  blackStars: 4,
};

export default RatingComponent;
