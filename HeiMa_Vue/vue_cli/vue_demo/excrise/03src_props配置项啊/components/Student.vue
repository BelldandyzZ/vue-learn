<template>
    <div>
        <h1>{{ studentMes }}</h1>
        <h2>学生姓名：{{ studentName }}</h2>
        <h2>学生年龄：{{ myStudetAge  }}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                studentMes:'我是一个大聪明！',
                myStudetAge:this.studentAge + 1
            }
        },
        props:['studentName','studentAge']
    }
</script>