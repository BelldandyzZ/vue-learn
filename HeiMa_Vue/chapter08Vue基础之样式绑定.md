# 一、绑定样式的使用

```markdown
1. 正常的样式正常写，也就是写在`class`中

2. 变化的样式不要自己去操作dom节点，而是使用v-bind:class:xxx，这样做之后，绑定的样式就会和正常样式一起出现在class上

3. 绑定样式
	*字符串写法：这种适用于样式名字不确定，需要动态指定时使用，`但是只能绑定一个样式`
	
	*数组写法：这种写法适用于样式名字不确定，个数也不确定时使用，`可以绑定多个样式`。
	
	*对象写法：这种写法适用于样式名字确定，个数也确定，但是要动态决定用哪一个个时使用，`可以绑定多个样式`。
```

```html
/*css*/
<style>
    .basic{
        height: 100px;
    }
    .red{
        background: red;
    }
    .black{
        background: black;
    }
    .pink{
        background: pink;
    }
    
    .text{
       font-size: 100px;
    }
</style>


/*html*/
<div id="app">
    /*
     （1）当从data中绑定了styleC这个样式之后，'.pink'和'.basic'这两个样式就会一起出现在class这个属性中。
    */
    
    /*字符串写法*/
    <div class="basic" :class="styleC">this is box</div>
    
    /*数组写法*/
    <div class="basic" :class="styleArr">this is box</div>
	
    /*对象写法*/
    <div class="basic" :class="styleObj">this is box</div>
</div>



/*js*/
data:{
	
	styleA:'red',
	styleB:'black',
	styleC:'pink',

	styleArr:['text','red'],

	//false表示不使用该样式，true表示使用
	styleObj:{
		black:true,
        text:true
	}
}
```

