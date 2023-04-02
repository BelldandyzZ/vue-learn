<template>
   <ul>
        <li :style="{opacity}">欢迎学习Vue</li>
        <li>news001
            <input type="text">
        </li>
        <li>news002
            <input type="text">
        </li>
        <li>news003
            <input type="text">
        </li>
    </ul>
</template>

<script>

export default {
    name:'News',
    data(){
        return {
            opacity:0,
        }
    },  
    beforeDestroy() {
        console.log('New组件即将被销毁');
    },
    activated(){
        console.log('router will be activated');
    },
    deactivated(){
        clearInterval(this.timer)
        console.log('router will be deactivated');
    },

    mounted(){
        this.timer = setInterval(()=>{
            console.log('定时器执行中........');
            this.opacity += 0.01
            if(this.opacity >= 1) this.opacity = 0
        },20)
    },

}
</script>

<style>

</style>