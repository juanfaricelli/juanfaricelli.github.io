import React from 'react';
import PropTypes from 'prop-types';
import KEYS from '../../utils/labels';

const Details = (props) => {
  const { text } = props;

  const defaultClassPrefix = `details`;

  // TODO: dangerouslySetInnerHTML is not a good practice
  return (
    <div className={`${defaultClassPrefix}-container`}>
      <div className={`${defaultClassPrefix}-label-container`}>
        <label className={`${defaultClassPrefix}-label`}>{ KEYS.DETAILS }</label>
      </div>
      <div className={`${defaultClassPrefix}-text`} dangerouslySetInnerHTML={{__html: text}} />
    </div>
  );
}

Details.propTypes = {
  text: PropTypes.string,
};

Details.defaultProps = {
  text: '',
};

export default Details;