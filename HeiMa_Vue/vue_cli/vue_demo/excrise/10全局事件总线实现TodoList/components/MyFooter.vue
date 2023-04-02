<template>
   <div class="todo-footer" v-show="todos.length">
            <label>
              <input type="checkbox" v-model="showAll"/>
            </label>
            <span>
              <span>已完成{{ checkedLength }}</span> / 全部{{ todos.length }}
            </span>
            <button class="btn btn-danger" @click="clearDone(todos.id)">清除已完成任务</button>
          </div>
</template>

<script>
    export default {
        name:"MyFooter",
        props:["todos"],
        methods:{
          clearDone(id){
            console.log(3123);
            this.$emit('clearDone',id);
          },
        },
        computed:{
          checkedLength(){
                return this.todos.reduce((pre,cur) => pre + ( cur.done ? 1 : 0),0)    
          },
          showAll:{
            get(){return this.checkedLength == this.todos.length},
            set(value){
              this.$emit("checkedAll",value)
            }
          }
        }
        
    }
</script>

<style scoped>
/*footer*/
.todo-footer {
height: 40px;
line-height: 40px;
padding-left: 6px;
margin-top: 5px;
}

.todo-footer label {
display: inline-block;
margin-right: 20px;
cursor: pointer;
}

.todo-footer label input {
position: relative;
top: -1px;
vertical-align: middle;
margin-right: 5px;
}

.todo-footer button {
float: right;
margin-top: 5px;
}
</style>