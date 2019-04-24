import React from 'react';
import PropTypes from 'prop-types';

const StockLabel = (props) => {
  const { stock } = props;

  const defaultClassPrefix = `stock-label`;

  return (
    <div className={`${ defaultClassPrefix }-container`}>
      <label>Stock: <span className={`${ defaultClassPrefix }-number`}>{stock}</span></label>
    </div>
  );
}

StockLabel.propTypes = {
  stock: PropTypes.string,
};

StockLabel.defaultProps = {
  stock: '0',
};

export default StockLabel;