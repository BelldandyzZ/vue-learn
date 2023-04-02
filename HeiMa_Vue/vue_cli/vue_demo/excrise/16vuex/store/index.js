import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

const actions = {
    increment(miniStore,value){
        miniStore.commit('INCREMENT',value);
    },
    deincrement(miniStore,value){
        miniStore.commit('DEINCREMENT',value);
    },
    incrementOdd(miniStore,value){
        if(miniStore.state.sum % 2) {
            miniStore.commit('INCREMENT',value)
        }
    },
    incrementWait(miniStore,value){
        setTimeout(()=>{
            miniStore.commit('INCREMENT',value)
        },1000)
    }
}
const mutations = {
    INCREMENT(state,value){
        state.sum += value
    },

    DEINCREMENT(state,value){
        state.sum -= value
    },
} 
const state = {
    sum : 10,
    school:'广州大学',
    subject:'软件工程',
};

const getters = {
    bigSum(state){
        return state.sum * 10
    }
}


export default new Vuex.Store({
    actions,mutations,state,getters
})
