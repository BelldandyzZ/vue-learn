<template>
  <div class="box">
    <Category :listData="games"  title="游戏">
        <img slot="imgs" src="./assets/12321.jpg">

        <span slot="footer">xxxxxxxxxxxxxxxxxx</span>
    </Category>

  </div>
</template>

<script>
    import Category from './components/Category.vue'
    export default {
        name:"App",
        components:{
            Category,
        },
        data(){
            return{
                games:['CF','CSGO','DNF','LOL','WOW'],
            }
        },
    }
</script>
<style>
    .box{
        display: flex;
        justify-content: space-around;
    }
</style>
