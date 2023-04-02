<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <h2>当前求和 * 10为:{{bigSum}}</h2>
    <h3>我在{{school }}-学习{{subject }}</h3>
    <select v-model.number="count">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
    </select>
    <button @click="INCREMENT(count)">+</button>
    <button @click="DEINCREMENT(count)">-</button>
    <button @click="incrementOdd(1)">当前和为奇数时再加一</button>
    <button @click="incrementWait(1)">等一等再加一</button>
  </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    import {mapActions,mapMutations} from 'vuex'
    export default {
        name:'Count',
        computed:{
            ...mapState(['sum','school','subject']),
            ...mapGetters(['bigSum']),
        },
        methods:{
            ...mapMutations(['INCREMENT','DEINCREMENT']),
            // INCREMENT(value){
            //     this.$store.commit('INCREMENT',value);
            // },
            // DEINCREMENT(value){
            //     this.$store.commit('DEINCREMENT',value);
            // },
            //================================================================
            ...mapActions(['incrementOdd','incrementWait']),
            // incrementOdd(value){
            //     this.$store.dispatch('incrementOdd',value)
            // },
            // incrementWait(value){
            //    this.$store.dispatch('incrementWait',value)
            // },
        },


        data(){
            return {
                count:1,
            }
        },
       
    }
</script>

<style>

</style>