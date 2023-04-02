# 一、什么是计算属性

```html
<input type="text"  v-model="firstName"><br><br>
<input type="text"  v-model="lastName"><br><br>

<div>{{fullName}}</div>

```

```javascript
data:{
    firstName:"尼古拉斯",
    lastName:'酒桶'
},
    
computed:{
    fullName:{
        get(){
            return `${this.firstName} - ${this.lastName}`
        },
         set(value){
                // .....
         }
    }
}
```



```markdown
1. 对于Vue来说，data中的配置就是属性，对data中的属性进行计算，产生结果的就是计算属性。属性与计算属性在vm中都存在，可以把计算属性当作一个普通的属性来理解，只不过计算属性的值是由属性计算之后才得到的

2. 计算属性需要写在computed中，为了应对复杂的计算场景，vue规定，每一个计算属性都必须以对象的形式编写，对象中定义get方法，当使用计算属性的时候，vue就会自动调用get方法返回该计算属性的结果

3. 计算属性getter方法
	* 在计算属性初始化时会调用get方法。之后会缓存起来，所有用到该计算属性的地方都会从缓存中读取数据。
	
	*`计算属性`计算出结果所依赖的数据发送变化时会调用get方法
	
4. 计算属性的setter方法
	*如果一个属性只读，就可以不用写setter
	
	*当计算属性被修改时调用setter方法。setter需要修改data中的属性，因为getter的结果是从data属性计算。如果不更改data属性的值，那么setter方法毫无意义
	

```



# 二、计算属性的简写

```javascript
//1. 版本1,此时的这个方法就是get方法
computed:{
    fullName:function(){
       return `${this.firstName} - ${this.lastName}`
    },
}


//2. 版本2
computed:{
    fullName(){
       return `${this.firstName} - ${this.lastName}`
    },
}


注意：当计算属性只有一个get方法时才能简写。虽然简写之后像一个函数，但实际上还是一个计算属性，使用时依然{{}}
```

