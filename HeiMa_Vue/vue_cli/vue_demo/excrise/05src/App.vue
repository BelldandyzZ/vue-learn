<template>
    <div>
        <Student ref="s1" studentName="Lucy" :studentAge="18"></Student>
        <hr>
        <Student ref="s2" studentName="Jack" :studentAge="180"></Student>

    </div>
</template>

<script>
import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{
                Student
        },
    }
</script>