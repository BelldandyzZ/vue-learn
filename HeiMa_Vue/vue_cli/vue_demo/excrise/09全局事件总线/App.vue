<template>
    <div>
        <h1>{{ msg }}</h1>
        <Student ref="student"></Student>
        <School ref="school"></School>
    </div>
</template>

<script>
    import School from './components/School.vue';
    import Student from './components/Student.vue';
    export default {
        name:'App',
        components:{
            Student,School
        },
        data(){
            return {
                msg:'这是App的msg'
            }
        },
       
    }
</script>
<style >
   div{
    background: grey;
    padding: 10px;
   }
</style>
