<template>
    <ul>
        <li>{{id}}</li>
        <li>{{title}}</li>
    </ul>
</template>

<script>

export default {
    name:'Details',
    props:['id','title']
}
</script>
