import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';

import setimmediate from 'setimmediate';

export default // new Vuex.Store(
  {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
//);

/*
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
*/
