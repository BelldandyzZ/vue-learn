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
    <button @click="increment">+</button>
    <button @click="deincrement">-</button>
    <button @click="incrementOdd">当前和为奇数时再加一</button>
    <button @click="incrementWait">等一等再加一</button>
  </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        name:'Count',
        computed:{
            ...mapState(['sum','school','subject']),
            ...mapGetters(['bigSum']),
        },

        data(){
            return {
                count:1,
            }
        },
        methods:{
            increment(){
                //this.$store.dispatch('increment',this.count)
                this.$store.commit('INCREMENT',this.count);
            },
            deincrement(){
                //this.$store.dispatch('deincrement',this.count)
                this.$store.commit('DEINCREMENT',this.count);
            },
            incrementOdd(){
                this.$store.dispatch('incrementOdd',1)
            },
            incrementWait(){
               this.$store.dispatch('incrementWait',1)
            },
        },
    }
</script>

<style>

</style>