import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
    store,
    components:{
        App,
    },
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    },
}).$mount('#app')

