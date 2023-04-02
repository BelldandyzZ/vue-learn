<template>
    <div class="demo">
        <h1>{{ studentName }}</h1>
        <h1>{{ studentAddr }}</h1>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                studentName:'广州大学',
                studentAddr:'广州',
            }
        },
    }
</script>

<style>
    .demo{
        background: #bfa;
    }
</style>