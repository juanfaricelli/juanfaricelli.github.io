import { combineReducers } from 'redux';

import MockedDataReducer from './reducer_mocked_data';

export default combineReducers({
  product: MockedDataReducer
});