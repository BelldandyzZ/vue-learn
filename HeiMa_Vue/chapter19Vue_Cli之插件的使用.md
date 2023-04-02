# 一、插件的解释

```markdown
- 插件可以帮助我们去增强Vue,写在一js文件中由Vue调用的


- 插件的本质就是一个对象{},但是要求这个对象有install(Vue...)方法，第一个参数是Vue构造函数，之后才是使用者传递的数据


- 插件的使用
	* 第一步：导入插件，在main.js中导入xxx.js文件
	
	* 第二步：注册插件，Vue.use(插件名)
	
*注意：注册完成之后vue就会调用插件的install方法，并且插件的注册需要在new Vue()之前

*网上由很多好用的插件，需要哪个插件就先下载文件，然后Vue.use()就可以了
```

# 二、代码

```javascript
//插件代码
export  default {
    install(Vue){
        Vue.prototype.hello = ()=>{
            alert("hello world")
        }
    }
}
这个插件的作用是给Vue的原型上添加一个hello函数
```

```javascript
//main.js


import Vue from 'vue'
import App from './App.vue'
//导入插件
import plugin from './plugin'
//使用插件
Vue.use(plugin)

Vue.config.productionTip = false;
new Vue({
    components:{
        App,
    },
    render:h=>h(App),
    
}).$mount('#app')


```

```javascript
//Student组件
<button @click="show">click me</button></button>
    
 methods:{
     show(){
         this.hello();
     }
 }    
```

