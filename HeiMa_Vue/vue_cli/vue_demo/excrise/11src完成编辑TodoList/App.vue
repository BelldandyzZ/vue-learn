<template>
  
  <div class="todo-container">
        <div class="todo-wrap">
         <MyHeader @revice="revice"/>
         <MyList :todos="todos" />
         <MyFooter :todos="todos" @clearDone="clearDone" @checkedAll="checkedAll"/>
        </div>
      </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
    export default {
        name:"App",
        components:{
            MyFooter,MyHeader,MyList
        },
        data(){
            return {
                //从浏览器存储获取数据
                todos:JSON.parse(localStorage.getItem("todos")) || [] 
            }
        },
        methods:{
            //接收todo并添加的方法
            revice(todo){
                if(todo.title) return this.todos.unshift(todo);
                alert("待办不能为空！")
            },
            
            //勾选或者不选的方法
            doneTodo(id){
                this.todos.forEach(todo => todo.id !== id || (todo.done = !todo.done) )
            }, 
            //删除todo的方法
            deleteTodo(id){
                this.todos = this.todos.filter(todo=>todo.id != id)
            },
            //清除已完成的任务
            clearDone(){
                this.todos = this.todos.filter(todo=>!todo.done)
            },
            //选择全部
            checkedAll(done){
                this.todos.forEach(todo=>todo.done = done)
            },
            //更新某一个todo
            updateTodo(id,title){
                this.todos.forEach(todo => todo.id !== id || (todo.title = title) )
            }
        },
        watch:{
            //当数据发生改动时，把数据放入浏览器存储
            todos:{
                handler(value){
                    localStorage.setItem("todos",JSON.stringify(value))
                },
                deep:true,
            }
        },
        mounted(){
            //绑定自定义事件
            this.$bus.$on('doneTodo',this.doneTodo)
            this.$bus.$on('deleteTodo',this.deleteTodo)
            this.$bus.$on('updateTodo',this.updateTodo)
        },
        beforeDestroy(){
            //解绑自定义事件
            this.$bus.$off(['doneTodo','deleteTodo','updateTodo'])
        }
    }
</script>

<style>
/*base*/
body {
background: #fff;
}

.btn {
display: inline-block;
padding: 4px 12px;
margin-bottom: 0;
font-size: 14px;
line-height: 20px;
text-align: center;
vertical-align: middle;
cursor: pointer;
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
border-radius: 4px;
}

.btn-danger {
color: #fff;
background-color: #da4f49;
border: 1px solid #bd362f;
}

.btn-modify {
color: #fff;
background-color: blue;
border: 1px solid blue;
}

.btn-danger:hover {
color: #fff;
background-color: #bd362f;
}

.btn:focus {
outline: none;
}

.todo-container {
width: 600px;
margin: 0 auto;
}
.todo-container .todo-wrap {
padding: 10px;
border: 1px solid #ddd;
border-radius: 5px;
}

</style>