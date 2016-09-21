import { combineReducers } from 'redux';

import {fetchWeatherReducer} from './reducer_weather';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  weather:fetchWeatherReducer
});

export default rootReducer;
