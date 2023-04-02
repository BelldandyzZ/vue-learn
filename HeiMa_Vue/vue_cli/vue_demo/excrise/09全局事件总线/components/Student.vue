<template>
    <div>
        <h2>学生姓名：{{ studentName }}</h2>
        <h2>学生年龄：{{ studentAge  }}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                studentName:"lucy",
                studentAge:19,
            }
        },
        mounted() {
            //给组件实例对象x绑定一个事件demo
            this.$bus.$on('demo',(value)=>{
                console.log(`Student组件接收到了数据,数据是：${value}`);
            })
        },
        beforeDestroy(){
            this.$bus.$off('demo');
        }
      
    }
</script>
<style scoped>
    div{
        background: pink;
    }
</style>