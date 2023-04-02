# 一、什么是mixins混入

```markdown
多个组件共享一个配置就叫做混入。任何配置项都可以写在混合js文件中

1. 组件混入

	*第一步：在组件中导入混入文件xxx.js
	
	*第二步：在组件中配置mixins配置项
	
	
2. 全局混入
	-在main.js中使用混入就叫做全局混入,全局混入的任何元素在vm和vc身上都存在
	
	*第一步：在main.js中导入混入文件xxx.js
	
	*第二步：在Vue身上注册混入 'Vue.mixin()'

2. 混入的规则
	*混入的原则是如果组件中有就是用组件的，如果没有就使用混入的；props > 配置项数据 > mixins
	
	*例外：如果混入生命周期函数，不会二选一，而是混入文件中的钩子和组件中的钩子函数都执行
	

```



# 二、组件混入

```javascript
 export const mixinOfMethods = {
    methods:{
        showMsg(){
            alert(`${this.name}`)
        }
    },
    data(){
        return {
            x:100,
            y:200
        }
    },
    mounted() {
        console.log('这是混入中的mounted');  
    },
}
```

```vue
<script>
    import {mixinOfMethods} from '../mixin.js'
    export default {
        name:'Student',
        data() {
            return {
                name:"lucy",
                studentAge:19,
            }
        },
        mixins:[mixinOfMethods],
        mounted() {
            console.log('这是Student中mounted');
        },
    }
    
    //该组件实例有showMsg方法，有x,y的数据，并且有两个mounted挂载函数
```





# 三、全局混入

```javascript
 export const mixinOfMethods = {
    methods:{
        showMsg(){
            alert(`${this.name}`)
        }
    },
    data(){
        return {
            x:100,
            y:200
        }
    },
    mounted() {
        console.log('这是混入中的mounted');  
    },
}
```

```javascript
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false;

//导入 混入文件
import {mixinOfMethods} from './mixin.js'
//注册混入，所有的vc和vm都会有混入文件中的元素
Vue.mixin(mixinOfMethods)


new Vue({
    components:{
        App,
    },
    render:h=>h(App),
    
}).$mount('#app')


```

