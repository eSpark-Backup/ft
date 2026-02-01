import {SNAPSHOTS} from '../actionTypes';

export const snapshots = (val) => {
  console.log('Action ka val bata',val)
  return {
    type: SNAPSHOTS,
    payload: val,
  };
};
