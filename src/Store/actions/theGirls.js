import {THEGIRLS} from '../actionTypes';

export const selectTheGirls = (val) => {


  return {
    type: THEGIRLS,
    payload: val,
  };
};
