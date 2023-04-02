<template>
  <div class="box">
    <Category :listData="games"  title="游戏">
        <template slot="aa">
            <div>
                <img src="./assets/12321.jpg">
            </div>
        </template>
        
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
