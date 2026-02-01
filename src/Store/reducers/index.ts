import {combineReducers} from 'redux';

import program from './program';
import theGirls from './theGirls';
import snapshots from './snapshots';

export default combineReducers({
  program,
  theGirls,
  snapshots,
});
