import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';

import setimmediate from 'setimmediate';

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
