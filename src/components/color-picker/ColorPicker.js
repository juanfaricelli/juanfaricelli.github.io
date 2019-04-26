import React from 'react';
import PropTypes from 'prop-types';
import KEYS from '../../utils/labels';

const ColorPicker = (props) => {
  const { onChange, availableColors, selectedColor } = props;
  let colorSelected = selectedColor;

  const defaultClassPrefix = 'color-picker';

  const selectColor = (newColor) => {
    onChange(newColor)
    colorSelected = newColor;
  }

  const colorsList = availableColors.map((color) => {
    return (
      <div
        key={ color }
        id={ color }
        className={`
          ${defaultClassPrefix}-colors-circle
          ${defaultClassPrefix}-colors-circle-${color}
          ${colorSelected === color && 'selected'}`}
        onClick={() => selectColor(color)} />
    );
  });

  return (
    <div className={ `${defaultClassPrefix}-container` }>
      <div className={ `${defaultClassPrefix}-label` }>
        <label>
          { KEYS.COLOR_LABEL } <span className={ `${defaultClassPrefix}-label-value` }> { colorSelected || KEYS.SELECT } </span>
        </label>
      </div>
      <div className={ `${defaultClassPrefix}-colors` }>
        { colorsList }
      </div>
    </div>
  );
}

ColorPicker.propTypes = {
  onChange: PropTypes.func,
  availableColors: PropTypes.array,
  selectedColor: PropTypes.string,
};

ColorPicker.defaultProps = {
  onChange: () => {},
  availableColors: [ 'naked-1' ],
};

export default ColorPicker;
