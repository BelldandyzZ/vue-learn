import Vue from 'vue'
import App from './App.vue'
import {mixinOfMethods} from './mixin.js'
Vue.config.productionTip = false;
Vue.mixin(mixinOfMethods)

new Vue({
    components:{
        App,
    },
    render:h=>h(App),
    
}).$mount('#app')

