import Vue from 'vue'
import App from './App.vue'


import router from './router/index'


Vue.config.productionTip = false

new Vue({
    router:router,
    components:{
        App,
    },
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    },
}).$mount('#app')

