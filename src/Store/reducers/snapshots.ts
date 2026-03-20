import {SNAPSHOTS} from '../actionTypes';

// const initialState = [];

const initialState = [];
export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case SNAPSHOTS:
      return [...state, action.payload];
    default:
      return state;
  }
}
