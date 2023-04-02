# 一、事件的基本使用

```markdown
- 使用`v-on:xxx`或者`@xxx`绑定事件，xxx是事件名字

- 事件需要配置在vm的methods属性中，与data中的数据一样它最终会出现在vm上

- methods中的函数都是被vue所管理的函数，this指向的是vm或者组件实例对象

- `@click=demo`与`@click=demo($event)`是一样的，第一个参数都是事件对象，但是后者可以传递参数。(@event是Vue定义的一个对象)

- 如果想要给事件回调传递参数，只需要写`@click=demo(param)`，在demo回调中param就不是evnet了，而是传递过来的参数
```





# 二、事件修饰符

```html
<div id="app">
    <!-- 1.阻止默认事件 -->
    <a href="http://www.baidi.com" @click.prevent="shwoInfo">阻止默认事件demo</a>  
    
    <!-- 2. 阻止事件冒泡 -->
    <div class="box1" @click="shwoInfo">
        <button @click.stop="shwoInfo">click me</button>
    </div>
    
    <!-- 3. 事件只执行一次 -->
    <button @click.once="shwoInfo">click me2</button>

</div>
```

```markdown
1. 事件分为事件捕获，事件冒泡，只有在冒泡阶段才会执行事件。也可以通过事件修饰符在事件捕获阶段执行事件。

2. 一共有6个事件修饰符。
	* prevent 阻止默认事件
	* stop	  阻止事件冒泡
	* once    事件只执行一次
	* capture 使用事件的捕获模式，事件在捕获阶段就执行
	* self    只有操作的元素是当前元素时才执行事件
	* pasive  事件的默认行为立即执行，无需等待事件执行完毕。正常情况下，事件发生之后，先执行事件函数，再执行默认行为。使用这个修饰符之后就会先执行默认行为再执行事件函数。例子：滑动鼠标滚轮会执行一个事件A，然后页面上的滚动条才滚动。使用了这个事件修饰符之后，页面的滚动条就会先滚动，再执行事件A

```



# 三、键盘事件与按键别名

```markdown
1. 键盘事件
    * @keydown 
    * @keyup


2.  按键别名
	* enter，
	* delete，
	* esc
	* ... 

注意：键盘事件一般搭配按键别名使用。@keydown.enter：表示按下enter键时触发事件
```











