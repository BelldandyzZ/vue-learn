# 一、监视属性的使用

```markdown
1. 监视属性是一个对象，用在Vue实例的watch对象中，里面可以配置多个监视属性，每个监视属性以对象的形式进行配置。监视属性这个对象的名字就是需要被监视的那个属性的属性名。

2. 监视属性用于监听'data中的属性' 与 '计算属性',当它们发生改变时，监视属性的handler函数自动调用。不存在的属性无法监视

3. handler有两个参数，一个是修改后的值，一个是修改前的值。'handler(newValue,oldValue)'

4. handler函数页面初始化时不会被调用，可以使用监视属性这个对象immediate：true来让handler在页面初始化时立即调用


```



# 二、监视属性的两种写法

```markdown
1. 监视属性可以在vm实例创建时写在watch中。也可以在vm创建之后通过往vm中'写'属性的方式添加监视属性

2. 两种方式的使用场景
   	*在vm创建时添加监视属性：已经十分确定了需要监视哪个属性就可以在vm创建时添加监视属性
   	
   	*在vm创建之后添加监视属性：不确定监视哪个属性，需要根据用户的行为来确定监视哪个属性。
```

```javascript
const vm = new Vue({
    el:"#app",
    data:{
        isHot:true,
    },
    //第一种写法
    watch:{
        //注意，isHot的正确写法时'isHot'，加上了引号，只不过为了方便才直接写isHot
        isHot:{
            immediate:true,
            handler(newValue,oldValue){
                console.log('isHot属性发生了改变');
            }
        }
    },
})

//第二种写法
vm.$watch('isHot',{
    immediate:true,
    handler(newValue,oldValue){
        console.log('isHot属性发生了改变');
    }
})
```



# 三、深度监视

- 创建vue实例时提供的watch默认不监视对象类型内部值的改变，只监视对象引用的改变。只有当对象引用改变时watch才认为是改变
- 如果想要在watch中监视对象类型内部值的改变，有两种办法
  - 直接在watch种把需要监视的对象类型内部值单独作为一个监视属性写出来
  - 开启深度监视`deep:true`
  - 使用了这两种方法之后，即使只改变了对象的内部值，vue也认为整个对象改变了，就会调用监视属性的handler方法

```javascript
data:{
    numbers:{
        a:1,
        b:2,
    }
},

watch:{

  //对于'创建vue实例时的watch默认不监视对象类型内部值的改变'的理解：此时只监视numbers地址时否发生变化，不监视numbers内部的值
  numbers:{
     handler(newValue,oldValue){
         console.log('numbers的引用改变了');
     }
   //监视对象内部值的第一种办法
    deep:true,
  }
    
   //监视对象内部值的第二种办法
  'numbers.a':{
     handler(newValue,oldValue){
         console.log('numbers.a的数据改变了');
     }
  }  
    
},
```



# 四、监视属性的简写

```javascript
1. 当监视属性只有一个handler的时候才能简写

watch:{
    //正常写法
    numbers:{
        handler(newValue,oldValue){
            console.log('numbers的引用改变了');
        }
    },

    //简写
    numbers(newValue,oldValue){
        console.log('numbers的引用改变了');
    }
},
  
```



# 五、监视属性与计算属性的区别

```markdown
1. 监视属性与计算属性的区别
	*computed能完成的功能，watch也能完成

	*watch能完成的功能，computed不一定能完成，例如。watch中可以开启定时任务做异步操作
	
2. 使用的两个原则

	*被vue所管理的函数写成普通函数，这样this的指向才是vm实例
	
	*不被vue所管理的函数写出箭头函数（定时器，ajax回调），这样this指向的才是vue实例 或 组件对象
	
3. 当watch与computed都能完成时，优先选择computed。

什么是不被vue实例管理的函数：比如在vue实例中，一个函数在`被vue所管理的函数`的内部，他就不是被vue所管理的函数。

computed:{
	//fullName就是被Vue所管理的函数
	fullName(){
		//这个定时器就不是被vue所管理的函数，因为是箭头函数，所以会向上找this，也就是找到fullName的this，也就是vue实例
		setTimeOut(()=>{
		})
	}
}


```



# 六、Vue监测数据改变的原理

```markdown
问：当数据改变之后，vue是如何知道数据改变了并做页面的重新渲染的。

*Vue默认有一个监视器用来监听data数据的改变。与watch不同，watch是交给程序员使用的，Vue默认的监视只是Vue内部使用。无论是watch，还是默认的监视其内部原理都是一样的。  
```

## ①Vue是如何做到响应式数据的

- 在进行数据代理,把data赋值给_data之前,会对data原数据进行加工,加工就是把data中的每一个数据设置一个get,set方法,通过调用方法的形式来获取或者修改值,而不是直接获取,加工完成的数据再赋值给vm中的_data

```markdown
1. 第一步:对data数据进行加工,即每一个数据都给一个get,set方法,任何读取或者修改该数据都要经过get,set

2. 第二步:把加工完成的对象data赋值给vm中的_data

*对data数据进行加工之后就可以做到响应式,_data数据改变页面立即重新解析

*原理:对data数据进行加工时在set中不仅仅是写了修改变量的逻辑,每次修改完成之后都会调用解析模版的代码对页面重新渲染
```

**数据劫持：对data进行加工,把原始data变为有set,get的对象Observer，这个动作就叫做数据劫持.**



## ②给vm中添加响应式数据

```markdown
*使用两个API
 （1）Vue.set(target,k,v)
 （2）vm.$set() / this.$set()


*用着两个个API添加的属性都有get，set方法


*绝对不能使用vm.$set()，Vue.set往vm、vc对象,或者数据根对象_data中直接添加数据.！！Vue语法不允许


*为什么要使用这两个API

  当我们data中的数据加工完成赋值给_data之后,也就是数据已经固定了,想要在_data中添加一个响应式的属性,需要用到这两个API

不能直接添加.例如vm._data.student.xxx,这样加虽然_data中有数据,但是不是响应式的,它仅仅只是有数据,没有get,set方法。

而页面获取或者修改数据是根据get,set方法完成的.此时需要用到它们。它们的原理都是一样的,都是给_data原数据添加具有get,set方法的响

应式数据.



*举例:
  Vue.set(vm._data.student,"sex","男") 或者
  Vue.set(vm.student.set,"sex","男"),vm中的student于_data中的stuent是一个引用

  vm.$set(obj,name,value)
  vm.$set(this.student,name,value)  vm.$set(this.student,'name','Lucy') =======>
  给vm或者vc的data属性中，一个叫做student的对象添加一个name属性，值为Lucy

```



## ③Vue监测对象改变的原理	

```javascript
/*********************用代码模拟一个数据监测*******************************/

let data = {
  	name: "xxxxx",
  	addr: "广州市白云区"
}

//监测对象，就是默认的监视器
const obs = new Observer(data);

//vm对象
const vm = {};
vm._data = data = obs;

function Observer(o) {
  //拿到data所有的属性名
  let arr = Object.keys(o);
  arr.forEach(k => {
    Object.defineProperty(this, k, {
      get() {
        return o[k];
      },
      set(val) {
        o[k] = val;
        console.log(`${k}的值被修改了,正在重新解析模版,生成新的虚拟dom,做diff比较`);
      }
    })
  })

}

```

## ④Vue监测数组改变的原理

```markdown
*修改数组中的某个元素一定用如下方法
1. 经过Vue包装过的数组方法pop,push,shift,unshift,sort,reserve,splice

2. Vue.set(),vm.$set()

*使用Vue.set(),vm.$set()
	vm.$set(vm.xxx.xxx,index,value)
	举例:vm.$set(vm.student.hobby, 0, "开车")

*使用经过包装的数组api改变数组元素,这些方法虽然可以直接用,但并不是原生js中的数组方法,而是Vue经过包装后的方法,类似代理模式
举例:调用vue包装后的push方法,方法内部会调用原生js的push方法,执行之后会调用vue重新解析模版,渲染页面的代码.

```



## ⑤总结

```
由于数据代理vm中的所有属性来自_data.页面使用的是vm中的属性.而vm中的属性来自于_data(即加工后的data)

当读取vm中的属性做渲染时,实际上在vm属性的get方法中调用了_data对应属性的get方法,

当修改vm属性时,在vm属性的set方法中实际上调用了_data对应属性的set方法,

修改完成后,_data中对应属性的set方法会调用重新解析模版的api生成新的模版,新模版生成新的虚拟dom,新旧虚拟dom做diff算法对比,不相同就直接根据新dom生成真实dom,相同就直接复用旧dom生成的真实dom.
```





