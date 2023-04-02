<template>
   <div class="page-header"><h2>Vue Router Demo</h2></div>
</template>

<script>
    export default {
        name:'Banner',
        mounted(){
            console.log('Banner组件挂载了');
            console.log(this);
        },
        destroyed() {
        console.log('Banner组件销毁了');
        },
    }
</script>

<style>

</style>