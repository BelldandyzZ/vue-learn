<template>
    <div>
        <h2>学生姓名：{{ studentName }}</h2>
        <h2>学生年龄：{{ studentAge  }}</h2>
        <button @click="sendStudentNameToApp">发生学习姓名到App</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        props:["getStudentNameFromStudentByFunc"],
        data() {
            return {
                studentName:"lucy",
                studentAge:19,
            }
        },
        methods:{
            
            sendStudentNameToApp(){
                // 手动调用父组件传递过来的函数来实现子向父传递数据
                // this.getStudentNameFromStudentByFunc(this.studentName)
                //使用自定义事件完成子向父传递数据
                this.$emit("atguigu",this.studentName)
            }
        }

    }
</script>