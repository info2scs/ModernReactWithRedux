import {FETCH_WEATHER} from  '../actions/index';

export default function(state = [], action) {
  console.log('Action received in WeatherReducer', action);

  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]);
      return [action.payload.data, ...state]; // ES6 notation of the above
      // [city, city, city] NOT [city, [city, city]]]
  }
  return state;
}
