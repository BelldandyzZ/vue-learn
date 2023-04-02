#  一、目录

## ①基础

- let和const
- 模板字符串
- 增强的函数
- 解构赋值
- 扩展的字符串,对象,数组功能
- Symbol
- Map和Set

## ②高级

- 迭代器,生成器
- Promise对象
- Proxy对象
- async的用法
- 类 class
- 模块化

```markdown
*补充:如果浏览器不识别某些es6,可以使用babel工具转换成es5语法

*MDN:前端万能查询资料的网站,可以去看es6
```





# 二、let和const

## ① var的变量声明提升

```javascript

/*
这里不会提示找不到a,而是输出undefined,因为var做了变量提升
	(1)在全局作用域中: 如果不是声明在函数内,声明在全局域中,则把声明提升到全局作用域的第一行
	
	(2)在函数作用域中: 使用var定义的变量js都会把变量的声明提升到当前函数的第一行.
	
	(3)在块级作用域中: var只有全局作用域和函数作用域,没有块级作用域
	
	(4)赋值时机: 赋值是在程序员声明该变量的地方,也就是我们程序员声明var a = 100的这个地方,所以输出undefined
	
	(5)同名变量: 使用var可以声明多个同名变量,但是后赋的值会覆盖先赋的值
*/

    function m(){
        console.log(`内部${a}`);//输出undefined,因为声明提升到了当前函数的第一行
        var a = 100;
        
    }
    m();
	
    console.log(`外部${a}`);//保存,因为全局作用域中没有`a`这个变量
```

## ②let和const解决var的缺点

```markdown
1. let不会有变量声明的提升

2. let除了有全局,函数作用域之外,还有块级作用域,如if(){}代码块等

3. 不能声明同名变量

4. const的作用与let完全一样,但是const是声明常量的.

建议:默认使用const,需要修改变量的值是使用let
```



# 三、模板字符串

```
使用反引号包裹字符串,字符串内使用${x}拼接变量名.解决换行的问题
```

# 四、增强的函数

## ①形参的默认值

```javascript
在es5中一个有参函数可能不会传值,这样就需要一个默认值,es5是直接写在函数体内的,es6如下:

    function m(a = 10,b = 20){
        return a + b;
    }
    m(1,2);

	//当调用时有实参就用实参,没有传递参数就用默认值
```



## ②形参的默认值可以是函数

```javascript
    function m(a,b = getVal(5)){
        return a + b;
    }

    function getVal(val){
        return 5 + val;
    }

    m(10);//20

```



## ③可变形参运算符

```javascript
/*把所有的参数保存在一个数组中,使用在函数形参中*/

function checkArguments(...param){
    for (let curV of param) {
        console.log(curV);
    }
}
checkArguments("lisi",18,"北京")
```



## ④剩余参数运算符

```javascript
/*将一个数组分割,并把每一项当作一个独立的参数传给函数,使用在调用函数的实参中*/

const arr = [1,3,54,1,54];

Math.max(...arr);//54
```

```javascript
    function showParam(...params){
        for(let i = 0;i < params.length;i++){
            console.log(`下表为${i}的元素值是=========${params[i]}`);
            /*
             下表为0的元素值是=========1
			下表为1的元素值是=========54
			下表为2的元素值是=========65
			下表为3的元素值是=========key
            */
        }
    }
    const arr = [1,54,65,"key"];
    console.log(showParam(...arr));
```



## ⑤es6的箭头函数

```javascript
function(){} 等于  ()=>{}


1. 箭头函数、箭头函数所在的结构没有this指向,这个结构在哪个作用域内,这个作用域内的this就是箭头函数的this

2. 不能使用箭头函数作为构造函数来new对象
```

# 五、解构赋值

- 解构赋值是对赋值运算符的一种扩展,通常是针对数组或者对象进行操作的.

## ①解构对象

```javascript
1. 使用解构赋值可以取出对象中的属性,接收该属性的变量必须与属性名一致,但是可以使用`:`给变量重命名

    let student = {
        name:"Lucy",
        age:19,
        height:"165",
        addr:{city:"北京",stress:"xx胡同"}
    }
    
    let {name : studentName} =  student;//Lucy

    let {addr} = student;//{city:"北京",stress:"xx胡同"}

	let {age,...params} = student;//也可以只取出一个属性,把其他属性通过剩余运算符保存起来

	let {height,sex = '女'} = student;//解构时也可以使用变量的默认值
	
	console.log(sex)//女
```



## ②解构数组

```javascript
    let arr = [1,2,3,[4]]

    const [a,b,c] = arr;//接收的变量与下标一一对应

    const [q,w,e,[r]] = arr;//可以嵌套解构
```



# 六、扩展的字符串,对象,数组功能

## ①对象的扩展功能

```javascript
/*1.对象的属性,方法可以简写*/

let name = "Lucy";
let age = 18;

let Person = {
    name,age,
    sayName(){
        return name;
    }
}

/*2.对象的变量和函数名可以使用字符串拼接*/

let x = 'ge';
console.log(person['a'+x]);//18


person['f'+'n'] = function(){
    console.log('this is function');
}
person.fn();//this is function


/*3.新增的api*/
(1)Object.is(0,0)//与 === 一样,但是比它更严格


//对象的合并,把所有对象的属性合并到tar中,属性名相同的由顺序靠后的覆盖,返回的新对象与tar是一个地址,是浅拷贝
(2)const o = Object.assign(tar,o1,o2,...)
                           
   const obj = Object.assign({},o1,o2,...)


```



## ②数组的扩展功能





# 七、Map和Set

## ①Set

```javascript
1. 有序不可重复

(1)可以结合扩展运算符用来数组,字符串去重

//将字符串转换成数组放进set
const set = new Set([...'1122fdsagaa']);

//将去重后的set转转成数组
const arr = [...set];

console.log(arr);

(2)Set中的对象引用无法被释放,所以不会使用Set集合来保存对象
    
```

## ②Map

```javascript
1. 键值对的有序不可重复列表,键值可以是任意类型
2. 对象的引用无法被释放

const map = new Map();
map.set('name','Lucy')
map.get('name')

```



# 八、迭代器forin与forof

## ①遍历对象

```javascript
1. forin遍历对象

for (const e in obj) {
    console.log(e);//得到的是obj的属性名
}


2. forof无法遍历对象
```

## ②遍历数组

```javascript

1. forin遍历数组
for (let e in arr) {
    console.log(e);//得到的是数组的下标
}


2. forof只能遍历数组
for (let e of arr) {
    console.log(e);//得到的是数组元素值
}




(*forof只能遍历有迭代器的对象或者数组)


3. 使用forof遍历数组的entries()既可以得到下标,也可以得到元素值
for (let [i,e] of arr.entries()) {
    console.log(`${i}:${e}`);
}

```

# 九、生成器Generator、Promise、async

```markdown
*Generator,Promise,async都是为了解决回调地狱的问题,使得异步代码同步化

*对于后端开发来说会用一个就行了,但是要知道是什么,实际使用都是用axios
```



# 十、class的用法

```javascript
    class Human{
        static city = 'chain';
        static stress = '北京街道';
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        static doSome(){console.log("this is doSome function!");}
        static doOther(){console.log("this is doOther function!");}
        formartNum(){console.log("this is formartNum function!");}
    }

    class Student extends Human{
        constructor(name,age,id,sex){
            //注意,在子类中必须使用super调用父类构造器才能使用this,不能全部使用this直接赋值
            super(name,age);
            this.id = id;
            this.sex = sex;
        }
        static doOther(){console.log("this is Student`s doOther function!");}
        formartNum(){console.log("this is Student`s doOther function!");}
    }

    const human  = new Human('Jack',90);
    console.log(human);
    
```

```markdown
1. javascript中支持使用class关键字定义一个类,使用new 创建该类的实例

2. 支持类的继承

3. 支持实例方法与静态方法的重写

4. 支持静态变量与静态方法(兼容性不是很好)

5. 使用'#'定义私有实例/静态属性与实例/静态方法

5. 支持instanceof操作符
```

# 十一、模块化

## ①模块化的理解

```markdown
1. 用Java程序员的思想理解模块化
	*java天生就是模块化的,把代码进行拆分,哪里需要就在那里import导入.我们导入的包,类就是这样
	
	*javascript在es6之后也有了这个特性.写一段js代码,哪里需要就在那里导入
	

*使用class 与 模块化结合的思想 可以实现js代码java化,适合java程序员去理解,使用模块化
```



## ②javascript模块化的解决方案

```markdown
1. es6之前使用CommonJS,AMD者两种方案来解决js的模块化
	*CommonJs适用于服务器,Nodejs就默认支持CommonJs
	*AMD适用于浏览器
	
2. es6推出的模块化技术'module'可以替代CommonJs,AMD这两种方案
	
```



## ③module的使用

```markdown
1. 使用两个关键字完成导入导出

	*export	导出
	
	*import	导入 (引入模块的script代码需要标记为type='module')
	
	*注:es6中一个模块没有export就无法进行import


2. 一个独立的js文件就是一个module

3. 可抛出默认值,默认值'export default'只能使用一次,默认导出的结构在使用的时候可以取任意名

4. 'export'可以使用多次

5. 可以使用 * 来导入所有被抛出的结构 ,并且 * 可以使用 as 重命名
```

```javascript
/*分别导出*/
export const country = 'chain';
export const city = 'shanghai';

//=====================================================

const name = 'Lucy';
const age = 19;
function showName() {
    console.log(name);
}

/*统一导出,必须加{}*/
export {
    name,age,showName
}

//=====================================================

/*默认导出*/
export default {
    orderNum:1,
    goodsMes:"this is orange!",
}

//=====================================================
//使用解构来接受导出的参数，接受默认导出的参数必须写在第一个
import defaultObj,{name,age,showName}  from './index.js';
showName();
console.log(name);
console.log(age);
console.log(defaultObj);

import * as modules from './index.js'; 
console.log(modules);
//使用默认导出固定写法'.default'
console.log(modules.default);;


```

