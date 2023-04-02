<template>
    <div>
        <h1 class="demo">{{ name }}</h1>
        <h1 class="demo">{{ age }}</h1>
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
    .demo{color: #bfa;}
</style>