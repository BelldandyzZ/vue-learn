<template>
    <li>
        <label>
        <input type="checkbox" 
            @change="doneTodo(todo.id)" 
            :checked="todo.done"
         />
         
        <span v-show="!todo.isModify" >{{todo.title}}</span>
        <input 
            @blur="handlerBlur(todo,$event)" 
            v-show="todo.isModify" 
            type="text" 
            :value="todo.title"
            ref="inputTitle"
        />


        </label>
        <button @click="deleteTodo(todo.id)" class="btn btn-danger">删除</button>
        <button @click="modifyTodo(todo)" class="btn btn-modify">编辑</button>

    </li>
</template>

<script>
    export default {
        name:"MyItem",
        props:["todo"],
        methods:{
            deleteTodo(id){
                this.$bus.$emit('deleteTodo',id);
            },
            doneTodo(id){
                this.$bus.$emit('doneTodo',id);
            },
            modifyTodo(todo){
                //如果没有isModify属性就添加一个默认值为true，如果有就修改值为true
                if('isModify' in todo){
                    todo.isModify = true;
                }else{
                   this.$set(todo,'isModify',true)
                }
                this.$nextTick(()=>{
                    this.$refs.inputTitle.focus();
                })
            },
            handlerBlur(todo,e){
                this.todo.isModify = false;
                this.$bus.$emit('updateTodo',todo.id, e.target.value)
            }
        },
    }
</script>

<style scoped>
/*item*/
li {
list-style: none;
height: 36px;
line-height: 36px;
padding: 0 5px;
border-bottom: 1px solid #ddd;
}
li:hover {
    background-color: #bfa;
}
li:hover button{
    display: block;
}

li label {
float: left;
cursor: pointer;
}

li label li input {
vertical-align: middle;
margin-right: 6px;
position: relative;
top: -1px;
}

li button {
float: right;
display: none;
margin-top: 3px;
}

li:before {
content: initial;
}

li:last-child {
border-bottom: none;
}
</style>