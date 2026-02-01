import {THEGIRLS} from '../actionTypes';

// import {languages} from '../language/language';

const initalState = [];

export default function (state = initalState, action) {
  const {type, payload} = action;

  switch (type) {
    case THEGIRLS:
      return action.payload;
    default:
      return state;
  }
}
