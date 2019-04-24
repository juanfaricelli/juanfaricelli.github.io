import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { label, type, fn } = props;

  return (
    <button className="shop-button" type={ type } onClick={ fn }>
      <label>{ label }</label>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  fn: PropTypes.func,
};

Button.defaultProps = {
  label: 'Algo Size',
  type: 'button',
  fn: () => {},
};

export default Button;