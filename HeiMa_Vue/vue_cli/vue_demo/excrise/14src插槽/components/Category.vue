<template>
    <div>
        <h1>{{title}}分类</h1>
        <slot name="imgs">
            <ul>
                 <li v-for="(item ,index) in listData" :key="index">{{ item }}</li>
            </ul>
        </slot>

        <slot name="footer">
            <h1>=======================</h1>
        </slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['listData','title'],
    }
</script>

<style scoped>
h1{
    background: orange;
    text-align: center;

}
div{
    width: 200px;
    height: 300px;
    background: gray;
}

img{
    width: 100%;
}
</style>