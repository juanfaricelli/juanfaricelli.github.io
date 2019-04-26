import axios from 'axios';

export const fetchProduct = () => async dispatch => {
  const response = await axios.get('https://www.mocky.io/v2/5c6c3a92320000e83bbef971');

  dispatch ({ type: 'FETCH_PRODUCT', payload: response });
}
