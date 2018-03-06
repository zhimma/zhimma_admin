import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';


export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
      increment (state){
          state.count++;
      }
    },
    actions: {
        getCount(store){
            store.commit('increament','2');
        }
    }
})
