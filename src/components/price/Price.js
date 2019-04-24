import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RatingComponent from '../five-star-rating/FiveStarRating';

class Price extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showStars: false,
    };

    this.toogleShowStars = this.toogleShowStars.bind(this);
  }

  toogleShowStars() {
    this.setState({ showStars: !this.state.showStars });
  }

  render() {
    const { currency, amount, blackStars } = this.props;
  
    const defaultClassPrefix = `price`;
    const showStarsClass = this.state.showStars ? 'visible' : '';
  
    return (
      <div className={ `${defaultClassPrefix}-container`} onClick={this.toogleShowStars}>
        <div className={`${defaultClassPrefix}-amount`}>{`${currency}${amount}`}</div>
        <div className={`${defaultClassPrefix}-stars ${showStarsClass}`}>
          <RatingComponent blackStars={ blackStars } />
        </div>
      </div>
    );
  }
}

Price.propTypes = {
  currency: PropTypes.string,
  amount: PropTypes.string,
  blackStars: PropTypes.number,
};

Price.defaultProps = {
  currency: '$',
  amount: '78',
};

export default Price;