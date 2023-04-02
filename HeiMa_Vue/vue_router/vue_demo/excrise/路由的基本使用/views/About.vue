<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    mounted(){
      console.log('About组件挂载了');
      console.log(this);
    },
    destroyed() {
      console.log('About组件销毁了');
    },
}
</script>

<style>

</style>