# 一、发送请求的API及它们的封装库

```markdown
**JS原生提供的xhr，基于它封装的库有很多
（1）jQuery封装了xhr
（2）axios
（3）vue-resource(vue1.0用的多)
	
**Window内置的fetch方法，和xhr平级，采用Promise风格，但是不怎么常用
 
```



# 二、跨域

```markdown
**跨域问题：请求发送之后，服务器响应返回到浏览器，但是浏览器发现该请求跨域了，于是数据不会返回到程序中，而是浏览器拦截住了


**跨域产生的原因：发送的请求违背了浏览器的同源策略。
   *协议名相同
   *主机名相同
   *端口号相同
  *******https://localhost:8080   =============>       https://localhost:5000     会产生跨域问题 *******
   
** 注意：同源策略只是浏览器与服务器之间的，服务器与服务器没有同源策略的说法
	

🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄

*******************************解决跨域问题**************************************************************

（1）后端解决cors：在服务器使用cors，加上特殊的响应头，浏览器解析响应时发现即使跨域也会把数据返回到程序员的程序中

（2）前端解决jsonp：只能解决GET请求的跨域问题

（3）配置代理服务器（常用）
  *使用nginx
  
  *使用vue-cli开启代理服务器
  
  *原理：配置一个代理服务器，我们写的程序通过浏览器去访问这个代理服务器，并且代理服务器的主机，端口，协议与请求地址中的一致。这样就满足了浏览器的同源策略，然后由代理服务器去访问真正的服务器，服务器与服务器之间没有同源策略的限制，它们之间的数据传输使用http协议，代理服务器拿到数据之后再返回给浏览器。
```





# 三、vue_cli配置代理服务器

```javascript
*使用vue_cli中的devServer配置项配置在vue.confing中


======================================================================================
module.exports = {
  devServer: {
    proxy: {
      //表示以api开头的路径都会去请求代理服务器，如果不以api开头会去访问前端public文件夹下的资源
      '/api': {
        target: 'http://localhost:5000',   //配置真实服务器的地址
        pathRewrite:{'^/api':''}		  //因为请求路径加了api，但是真实服务器中可能没有这个api路径，所以需要替换为 ""
        ws: true,						//是否websocket请求，默认true
        changeOrigin: true                //代理服务器是否开启端口伪装，即伪装成与真实服务器同样的端口，默认true
      },

      '/foo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/foo':''}
        ws: true,
        changeOrigin: true
      },
    }
  }
}


======================================================================================

<button @click="getStudent">获取学生信息</button>

<button @click="getCar">获取汽车信息</button>


======================================================================================

  getStudent(){
    axios.get("http://localhost:8080/api/students").then(
        response=>{
            console.log("请求成功");
            console.log(response.data);
        },
        error=>{
            console.log("请求失败");
            console.log(error.message);
        }
    )
},
    
 getCar(){
     axios.get("http://localhost:8080/foo/cars").then(
         response=>{
             console.log("请求成功");
             console.log(response.data);
         },
         error=>{
             console.log("请求失败");
             console.log(error.message);
         }
     )
 }


```



