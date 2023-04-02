# 一、Vue的安装

```markdown
1. 通过引入script或者通过Vue_cli安装

2. 安装Vue开发者工具，就是一个浏览器插件，打开浏览器开发者模式
```





# 二、Vue入门程序

```html
<div id="app">
    {{name}}
</div>
```

```javascript
new Vue({
    el:'#app',
    data:{
    	name:'Lucy'
    }
});
```



```markdown
1. 想让Vue工作，就必须创建Vue实例，并且传递一个配置对象，这个对象有多个参数

	*el：element的缩写，用于指定当前Vue实例与那个html容器绑定，它的值通常是css选择器字符串

	*data：用于存储数据，数据由绑定的容器使用。在html容器中使用插值语法`{{属性名}}`拿值


2. Vue容器中的代码依然遵顼html规范，不过是加入了Vue的特殊语法


3. 🉑理解：Vue容器中的代码被称为Vue模板

4. 一个容器只能被一个Vue实例接管，他们是一对一的关系

5. {{}}中可以写表达式，表达式就是可以生成一个值的代码

6. data中的数据发生变化时，用到这个数据的模板就会重新解析一次


```



# 二、el和data的两种写法

## ①el的两种写法

```javascript
//1. 第一种写法
const vue = new Vue({
	el:"#app"
})


//2. 第二种写法，把vue实例与容器延迟绑定
vue.$mount("#app")
```

## ② data的两种写法

```javascript
//1.对象式
const vue = new Vue({
	data:{}
})

//2. 函数式,但是data函数必须返回一个对象。
const vue = new Vue({
    //data函数是由vue实例来调的，所以不能写成箭头函数，箭头函数的this是全局window对象。this只能是vue实例
	data:function(){
		retuen{
    		name:'Lucy',
    		age:18
		}   
	}
})
```



**注意：由vue实例所管理的函数一定不能写成箭头函数，因为this不是vue实例**