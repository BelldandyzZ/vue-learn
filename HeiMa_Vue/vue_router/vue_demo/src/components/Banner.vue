<template>
   <div class="page-header">
        <h2>Vue Router Demo</h2>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="goTest">go</button>

   </div>
</template>

<script>
    export default {
        name:'Banner',
        methods:{
            back(){
                this.$router.back();
            },
            forward(){
                this.$router.forward();
            },
            goTest(){
                this.$router.go(5);
            }


        }
    }
</script>

<style>

</style>