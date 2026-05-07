import { PROGRAM, CRITERIA1, CRITERIA2, ACTIVITY, REPS } from '../actionTypes';

// import {languages} from '../language/language';

const initalState = {};

export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case PROGRAM:
      return action.payload;
    case CRITERIA1:
      return action.payload;
    case CRITERIA2:
      return action.payload;
    case ACTIVITY:
      return action.payload;
    case REPS:
      return action.payload;
    default:
      return state;
  }
}
