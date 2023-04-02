<template>
    <div>
        <h1 ref="tit" >this is App component</h1>
        <Student ref="school"></Student>
        <button ref="btn"  @click="getElement">点我获取真实DOM</button>
    </div>
</template>

<script>
import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{
                Student
        },
        methods: {
            getElement(){
                console.log(this.$refs.tit)
                console.log(this.$refs.btn)
                this.orderNum = 1;
            },
        },
      data() {
        return {
            name:"Lucy"
        }
      },
    }
</script>