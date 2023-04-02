# 一、ref

```markdown
1. ref的思想就是用vue的方式，给一个元素打上标识，并根据这个标识获取该元素（id的替代者）

	*原生js打标识是用id属性，拿到该属性的dom就需要操作dom，但是vue中是不建议直接操作dom的，所以就有了ref
	
	*通过ref给一个元素打上唯一标识，该标识会存在与vc的'$refs'属性中,使用'this.$refs.xxx'获取该标识所标记的真实dom
	
	
2. 使用ref获取真实dom

	*ref标识在html标签上，this就是该标签所在的组件实例对象，this.$refs.xxx获取的就是该标签的真实dom
	
	*ref标识在组件标签上，this.$refs.xxx获取就是该组件的实例对象
	
	*如果使用id标识组件标签，使用getElementById获取的就是该组件完整的dom结构
```





# 二、props配置项

```markdown
1. props与data，其他配置项的作用一样，都是产生数据存放在vm或者vc中，只不过配置项中的数据是自己定义的，props的数据是外部传入的。
  

2. props中的属性优先于配置项被解析放在vc中，所以在配置项如data中可以使用this获取外部传过来的props的属性值
		props属性 >  配置项属性

3. 数据传递给props时默认传递字符串，可以用v-bind把传递的字符串编程一个表达式，然后传递这个表达式的值

4. 组件的使用方给props传递值，组件接收值，为了避免使用方乱传值的，可以在接收方组件的props中做限定

	（1）简单接收：props:['studentName','studentAddr','studentAge','studentSex']
	
	（2）限定接收：
		 props:{
            studentName:{
                require:true,
                type:String,
            },
            studentAge:{
                type:Number,
                default:100,
          }


*使用建议：当一个组件被外部多次使用时，相同的数据放在data中，不同的数据放在props中

*props是只读的，Vue会监测对props的修改，发生了修改会产生警告，如果一定要修改，就把props的值复制到data中一份，然后去修改data中的值，用法如下代码
	*解释什么叫'对props的修改'：基本数据类型值改了看作为改，对象类型的属性值或者引用改了也看作是改
	
```

```javascript
	<div>{{myName}}</div>
	
	data(){
		return :{
			myName:this.name
		}
	}
	
	props:['name']

```

