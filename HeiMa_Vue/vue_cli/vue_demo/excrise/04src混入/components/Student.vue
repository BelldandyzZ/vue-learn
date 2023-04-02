<template>
    <div @click="showMsg">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ studentAge  }}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:"lucy",
                studentAge:19,
            }
        },
      

    }
</script>