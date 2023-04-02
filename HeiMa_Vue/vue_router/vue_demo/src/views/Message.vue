<template>
     <div>
      <!-- <h1>{{ o.number }}</h1> -->
        <ul>
          <li v-for="m in messageList" :key="m.id">
            <span>{{ m.title }}</span>
            <button @click='pushShow(m)'>push查看</button>
            <button @click="replaceShow(m)">replace查看</button>
          </li>
        </ul>
        <hr>
        <router-view></router-view>
      </div>
</template>

<script>
export default {
    name:'Message',
    data(){
        return {
          o:{},
          messageList:[
            {id:'001',title:'这是标题1'},
            {id:'002',title:'这是标题2'},
            {id:'003',title:'这是标题3'},
          ]
        }
    },
    methods:{
      pushShow(m){
          this.$router.push({
                name:'detalis',
                params:{
                    id:m.id,
                    title:m.title
                }
              }
          )
      },
      replaceShow(m){
        this.$router.replace({
                name:'detalis',
                params:{
                    id:m.id,
                    title:m.title
                }
              })
      }
    },
    mounted(){
      console.log('进入组件');
    },
    beforeRouteEnter(to,from,next){
      console.log('进入守卫beforeRouteEnter');
      next();
    },
    beforeRouteLeave(to,from,next){
      console.log('离开守卫beforeRouteLeave');
      next();
    }
}
</script>
