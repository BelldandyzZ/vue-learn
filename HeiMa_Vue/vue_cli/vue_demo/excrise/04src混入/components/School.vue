<template>
    <div @click="showMsg">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ schoolAddr  }}</h2>
    </div>
</template>

<script>
   
    export default {
        name:'School',
        data() {
            return {
                name:"广州大学",
                schoolAddr:"广州",
            }
        },
      

    }
</script>