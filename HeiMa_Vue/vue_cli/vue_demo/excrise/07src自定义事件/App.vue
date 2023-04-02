<template>
    <div>
        <h1>{{ mes }}</h1>
        <hr>
        <!-- 使用函数方式实现子传父 -->
        <!-- <Student :getStudentNameFromStudentByFunc="getStudentNameFromStudentByFunc"></Student> -->


        <!-- 使用自定义事件完成子向父传递数据 -->
        <!-- <Student @atguigu="getStudentNameFromStudentByEvent"></Student> -->

        <!-- 使用ref完成子传父 -->
        <!-- 第二个与第三个相比：第二个实在组件标签中就完成了事件的绑定，而第三中实在函数中完成绑定，更加灵活 -->
        <Student ref="student" @click.native="showMsg"></Student>

    </div>
</template>

<script>
    import Student from './components/Student.vue';
    export default {
        name:'App',
        components:{
            Student
        },
        data(){
            return {
                mes:'xxxxx'
            }
        },
        methods:{
            showMsg(){
                console.log("在父组件中的事件调用函数");
            },  
            getStudentNameFromStudentByFunc(studentName){
                alert(studentName)
            },
            getStudentNameFromStudentByEvent(studentName){
                alert(studentName)
            },
            getStudentNameFromStudentByRef(studentName){
                this.mes = studentName
            }
        },
        mounted(){
            // this.$refs.student.$on('atguigu',this.getStudentNameFromStudentByRef)
            this.$refs.student.$on('atguigu',(studentName)=>{
                this.mes = studentName 
            })
        }
    }
</script>
