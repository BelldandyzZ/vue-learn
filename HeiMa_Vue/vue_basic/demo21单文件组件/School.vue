<template>
  <div>
    <h1 class="demo">{{ name }}</h1>
    <h1 class="demo">{{ city }}</h1>
  </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return {
                name:'广州大学',
                city:'广州'
            }
        }
    }
</script>

<style>
    .demo{
        color: red;
    }
</style>