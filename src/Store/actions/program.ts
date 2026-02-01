import {PROGRAM, CRITERIA1, CRITERIA2, ACTIVITY, REPS} from '../actionTypes';

export const selectProgram = (val) => {
  return {
    type: PROGRAM,
    payload: val,
  };
};

export const selectCriteria1 = (val) => {
  return {
    type: CRITERIA1,
    payload: val,
  };
};

export const selectCriteria2 = (val) => {
  return {
    type: CRITERIA2,
    payload: val,
  };
};

export const selectActivity = (val) => {
  return {
    type: ACTIVITY,
    payload: val,
  };
};

export const selectReps = (val) => {
  return {
    type: REPS,
    payload: val,
  };
};
