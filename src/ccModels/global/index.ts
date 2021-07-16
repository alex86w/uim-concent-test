import { cst } from 'concent';
import state from './state';
import * as reducer from './reducer';

export default {
  [cst.MODULE_GLOBAL]: {
    state,
    reducer,
  },
};
