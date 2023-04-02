# 一、收集表单数据的规则

- `<input type="text">`，v-model收集的是value值，用户的输入就是value值

- `<input type="radio">`，v-model收集的是value值,并且需要给标签配置value值

- `<input type="checkbox">`

  ```markdown
  1. 若是没有配置value属性，则收集的就是checked的布尔值，选中或者未选中
  
  2. 若是配置了value值
  	（1）v-model初始值不是数组，那么收集的就是该多选框的checked
  	（2）v-model的初始值是数组，那么收集的该多选框选择的value
  ```

- v-model的三个修饰符

  ```
  v-model.lazy:失去焦点再收集数据
  v-model.number:收集的字符串转为有效的数字
  v-model.trim：收集的字符首尾空格过滤
  ```

  

# 二、示例代码

```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue学习</title>
</head>
<body>
    <div id="app">
       <form @submit.prevent="demo">
            账号：<input type="text" v-model="userInfo.account"><br>
            密码：<input type="text" v-model="userInfo.password"><br>
            性别：
            男<input type="radio" name="sex" value="man" v-model="userInfo.sex">
            女<input type="radio" name="sex" value="woman" v-model="userInfo.sex">
            <br><br><br>

            爱好:
            学习<input type="checkbox" name="hobby" value="learn" v-model="userInfo.hobby">
            打游戏<input type="checkbox" name="hobby" value="playGame" v-model="userInfo.hobby">
            吃饭<input type="checkbox" name="hobby" value="eat" v-model="userInfo.hobby">
            <br> <br><br><br>

            所属校区
            <br>
            <select v-model="userInfo.city">
                <option>请选择</option>
                <option value="beijin">北京</option>
                <option value="shanghai">上海</option>
                <option value="wuhan">武汉</option>
            </select>
            <br>
            其他信息：
            <textarea v-model="userInfo.otherMsg"></textarea> 
            <br><br><br>

            <input type="checkbox" v-model="userInfo.accept"> 
            阅读并接受<a href="https://www.baidu.comn">用户协议</a>   

            <br><br><br>
            <button>submit</button>
       </form>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.js"></script>
<script>
    const vm = new Vue({
        el:"#app",
        data:{
            userInfo:{
                account:'',
                password:'',
                sex:'',
                hobby:[],
                city:'',
                otherMsg:'',
                accept:false,
           }
        },
        methods: {
            demo(){
               console.log(JSON.stringify(this.userInfo));
            }
        },
    })
</script>
</html>
```

