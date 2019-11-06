import actions from './src/actions';
import mutations from './src/mutations';
import state from './src/state';
import getters from './src/getters';

import setimmediate from 'setimmediate';

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
