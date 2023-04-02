<template>
    <div class="demo">
        <h1>{{ name }}</h1>
        <h1>{{ age }}</h1>
    </div>
</template>


<script>
    export default{
        name:"Student",
        data(){
            return {
                name:'Lucy',
                age:19,
            }
        },
    }
</script>

<style>
    .demo{color: red;}
</style>