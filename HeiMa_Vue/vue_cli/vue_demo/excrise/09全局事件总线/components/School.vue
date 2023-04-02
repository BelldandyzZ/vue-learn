<template>
    <div>
        <h2>学校名字：{{ schoolName }}</h2>
        <h2>学校地址：{{ schoolAddr  }}</h2>
        <button @click="sendDataToStudent">点我发送数据给Student组件</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                schoolName:"广州大学",
                schoolAddr:"广州市",
            }
        },
        methods:{
            //触发组件x的事件demo，因为demo事件的回调实在Student中，所以可以把数据传递到Stuent中。
            sendDataToStudent(){
                this.$bus.$emit('demo',66666)
            }
        }
      
    }
</script>
<style scoped>
    div{
        background: #bfa;
    }
</style>