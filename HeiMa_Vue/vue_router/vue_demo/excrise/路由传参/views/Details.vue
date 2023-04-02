<template>
    <ul>
        <!-- <li>{{$route.query.id}}</li>
        <li>{{$route.query.title}}</li> -->

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
