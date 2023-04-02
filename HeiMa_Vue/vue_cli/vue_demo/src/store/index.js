import Vuex from 'vuex';
import Vue from 'vue';
import {nanoid} from "nanoid" 
Vue.use(Vuex);

const countOption = {
    namespaced:true,
    state:{
        sum : 10,
        school:'广州大学',
        subject:'软件工程',
    },
    actions:{
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
        },
    },
    mutations:{
        INCREMENT(state,value){
            state.sum += value
        },
        DEINCREMENT(state,value){
            state.sum -= value
        },
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    },
}

const personOption= {
    namespaced:true,
    state:{
        personList:[
            {id:'001',name:'Lucy'},
            {id:'002',name:'Kaka'},
        ]
    },
    actions:{
        addPerson(miniStore,value){
            const person = {id:nanoid(),name:value};
            miniStore.commit('ADD_PERSON',person);
        }
    },
    mutations:{
        ADD_PERSON(state,person){
            state.personList.unshift(person);
        },
    },
    getters:{},
    
}

export default new Vuex.Store({
    modules:{
        a:countOption,
        b:personOption
    }
})
