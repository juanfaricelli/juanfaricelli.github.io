import React from 'react';
import PropTypes from 'prop-types';
import KEYS from '../../utils/labels';

const Dropdown = (props) => {
  const { onChange, label, options, selectedValue } = props;
  if (!options.includes(KEYS.SELECT)) {
    options.unshift(KEYS.SELECT);
  }

  const defaultClassPrefix = `dropdown`;

  const optionsList = options.map((item) => {
    return (
      <option
        key={ item }
        className={`${defaultClassPrefix}-select-item`}
        value={ item } >
        { item }
      </option>
    );
  });

  return (
    <div className={`${defaultClassPrefix}-container`}>
      <label>{ label }</label>
      <select value={ selectedValue } onChange={ onChange } className={`${defaultClassPrefix}-select`}>
        { optionsList }
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

Dropdown.defaultProps = {
  label: 'Algo Size',
  options: [
    'Select',
  ],
  onChange: () => {},
};

export default Dropdown;