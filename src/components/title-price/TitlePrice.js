import React from 'react';
import PropTypes from 'prop-types';

import Price from '../price/Price';

const TitlePrice = (props) => {
  const { title, price, className } = props;

  return (
    <header className={ `title-container ${className}` }>
      <h1>{title}</h1>
      <Price amount={ price } />
    </header>
  );
}

TitlePrice.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  className: PropTypes.string,
};

TitlePrice.defaultProps = {
  title: '',
  className: '',
};


export default TitlePrice;
