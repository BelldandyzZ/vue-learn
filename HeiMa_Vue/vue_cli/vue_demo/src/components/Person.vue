<template>
    <div>
        <input v-model="name" type="text" placeholder="请输入名字">
        <button @click="addPerson(name)">添加</button>
        <ul>
            <li v-for="person in personList" :key="person.id">
                {{ person.id }} ========{{ person.name }} 
            </li>
        </ul>
        <h1>Count组件的和为:{{ sum }}</h1>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapActions} from 'vuex'
    export default {
        name:'Person',
        data(){
            return {
                name:'',
            }
        },
        computed:{
            //当a模块与b模块映射的计算属性名冲突时，以写在后面的为准，或者自己写一个计算属性解决名字冲突的问题
            //Vuex的模块化必须加上命名空间
            ...mapState('b',['personList']),
            ...mapState('a',['sum']),
        },
        methods:{
            ...mapActions('b',['addPerson'])
        }
    }
</script>

<style scoped>
    div{
        border: solid pink 10px;
    }
</style>