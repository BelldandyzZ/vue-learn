<template>
  <h2>我是Home的内容</h2>
</template>

<script>
export default {
    name:'Home',
    mounted(){
      console.log('Home组件挂载了');
      console.log(this);
    },
    destroyed() {
      console.log('Home组件销毁了');
    },
}
</script>

<style>

</style>