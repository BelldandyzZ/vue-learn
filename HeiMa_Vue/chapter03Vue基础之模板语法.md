# 一、模板语法

```markdown
1. 模板语法分为两大类
	*插值语法 {{}}
	*指令语法 v-xxx
	
2. 插值语法往往用于标签体的内容

3. 指令语法往往用于标签属性的内容（但是也可以用于标签体内容，绑定事件等等）
```

# 二、指令语法

## ①v-bind

```markdown
1. v-bind主要用于绑定标签属性，最大的特点是单向数据绑定，只能从data流向页面

2. v-bind可以简写为`:`

3. v-bind的值永远是表达式运行完成之后的结果，而不是表达式
```

```html
<div id="app">
    <a v-bind:href="url">百度</a>
    <a v-bind:style="{color:color}">谷歌</a>
</div>
```

```javascript
new Vue({
    el:'#app',
    data:{
        url:'http://www.baidu.com',
        color:'red'
    }
});
```



## ②v-model

```markdown
1. v-model是双向数据绑定，但是只能用在表单类元素上，也就是有value值的元素

2. v-model:value可以简写为v-model，因为v-model默认收集的就是value的值
```



## ③v-on

```
用于绑定事件，语法糖为 '@xxx' ，xxx为事件名
```



## ④v-for

```
用于遍历数组，对象，字符串
```



## ⑤v-show

```
条件渲染，动态控制节点是否展示
```



## ⑥v-if，v-else

```
条件渲染，动态控制节点是否存在
```



## ⑦v-text

```
替换节点中的内容（文本数据），不会解析标签结构。
```



## ⑧v-html

```
文本中的内容，可以解析html标签，但是会有安全隐患，造成xss攻击
```



## ⑨v-cloak

```
1. 本质是一个特殊属性，VUe实例创建完毕，接管容器后，会删除这个属性

2. 使用css配合v-cloak可以解决"网速慢的时候显示未经编译的html模板"
	
	[v-clock]:{
		display:none
	}
```



## ⑩v-once

```
1. v-once是没有值的，它所在的节点在第一次动态渲染之后，就被视为静态数据了，

2. 以后data数据的改变不会引起v-once所在结构的的数据更新，可以用于优化性能。
```



## 补充：v-pre

```
v-pre所在的结构Vue会直接跳过编译，直接展现原始的样子，意思就是在源代码中写的是什么样子，vue就渲染什么样子
```



# 三、自定义指令

```markdown
1. Vue中的指令其实就是操作一系列DOM语句的集合，最后形成一个指令,程序员如果需要自定义指令，就需要编写该指令操作DOM的逻辑

2. 语法定义
	（1）局部指令
		对象式
		* new Vue({
			directives:{
				指令名：配置对象
			}
		})
		
		函数式
		* new Vue({
			directives:{
				指令名：回调函数
			}
		})
	（2）全局指令
		对象式
		*Vue.directive(指令名：配置对象)
		
		函数式
		*Vue.directive(指令名：回调函数)
		
	（3）全局指令在所有的容器中都能使用，局部指令定义在那个容器就只能在那个容器使用

3. 注意点
	（1）指令定义时不需要加'v-'，但是使用时需要
	（2）如果指令名是多个单词，使用'-'隔开每个单词，不使用驼峰
	（3）不论式对象式还是函数式的自定义指令，在它的回调函数中this都是window而不是vm实例
```



## ①自定义指令函数式

```markdown
1. 函数式自定义指令的回调函数什么时候被调用
	* 自定义指令与元素成功绑定时其'回调函数会被调用'。
	* 自定义指令所在的模板被重新解析式会被调用


2. 回调函数有两个参数
	*第一个参数（element）：指令所在的元素，即真实dom
	*第二个参数（binding）：需要绑定的信息


*注意：使用函数式的方式自定义指令，元素与指令绑定时会调用该指令的函数，但是此时该元素只是在内存中的，并没有放入页面中。所以如果要对该元素进行特殊操作，如input的聚焦，是无法成功的，因为该元素没有渲染到页面，也就无法聚焦。此时使用对象式，可以解决这个问题
```

```html
<div id="app">
    <!-- 自定义v-big指令，该指令绑定的数据大小*10并放入标签内容区 -->
    <h1 v-big="n"></h1>
</div>
    
<script>
    const vm = new Vue({
        el:"#app",
       data:{
            n:1,
       },
       directives:{
            //element就是指令所在的真实DOM，binding就是需要绑定的信息
            big(element,binding){
                //此时把元素与指令进行了绑定，但是dom并没有渲染到页面
                element.innerHTML = binding.value * 10;
            }
       }
    })
</script>
```



## ②自定义指令 对象式

```html
<div id="app">
    <!-- 自定义v-fbind指令，作用与v-bind一样，另外使用该指令绑定的input在页面刷新时默认聚焦 -->
    <button @click="nAdd">点我n+1</button>
    <input type="text"  v-fbind="n">
</div>

<script>
    const vm = new Vue({
        el:"#app",
       data:{
            n:1,
       },
       directives:{
           fbind:{
                bind(element,binding){
                    //此时指令所在的元素与指令绑定,但是元素并没渲染到页面,无法进行聚焦操作
                    element.value = binding.value
                },
                inserted(element,binding){
                    //此时元素已经插入到页面，可以做聚焦操作
                    element.focus();
                },
                update(element,binding){
                    //页面重新解析给input的value赋最新值，然后聚焦
                    element.value = binding.value
                    element.focus();
                }
           }
       },
      methods: {
        nAdd(){
            this.n = this.n + 1;
        }
      },
    })
</script>
```

```markdown
1. 使用对象式的方式自定义指令，函数名都是规定好的，如果写错了，Vue就找不到了
	*bind(element，binding){}：指令与元素成功绑定时调用
	
	*inserted(element，binding){}：指令所在的元素被插入页面时执行
	
	*update(element，binding){}：指令所在的模板被重新解析时调用
	
	
2. 其实函数式的方式就是对象式不写inserted。
	*因为bind与update多数都是写重复的代码，所以Vue就提供了函数式的写法，如果没有特殊的需求，建议用函数式，如果需要在指令所在		的元素被插入页面时执行一些操作就用对象式
```

