<template>
  <div>
    <h2>;当前求和为:{{sum}}</h2>
    <h2>;我在{{school }}-学习{{subject }}</h2>
    <h2>;当前求和 * 10为:{{bigSum}}</h2>
    <select v-model.number="count">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
    </select>
    <button @click="INCREMENT(count)">+</button>
    <button @click="DEINCREMENT(count)">-</button>
    <button @click="incrementOdd(1)">当前和为奇数时再加一</button>
    <button @click="incrementWait(1)">等一等再加一</button>


    <h1>Person组件的人员列表是</h1>
    <ul>
        <li v-for="person in personList" :key="person.id">
            {{ person.id }} ========{{ person.name }} 
        </li>
    </ul>
  </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    import {mapActions,mapMutations} from 'vuex'
    export default {
        name:'Count',
        computed:{
            ...mapState('a',['sum','school','subject']),
            ...mapState('b',['personList']),

            ...mapGetters('a',['bigSum'])
        },
        methods:{
            ...mapMutations('a',['INCREMENT','DEINCREMENT']),
            ...mapActions('a',['incrementOdd','incrementWait']),
        },
        data(){
            return {
                count:1,
            }
        },
        mounted(){
            console.log(this.$store);
        }
    }
</script>

<style scoped>
    div{
        border: solid red 10px;
    }
</style>