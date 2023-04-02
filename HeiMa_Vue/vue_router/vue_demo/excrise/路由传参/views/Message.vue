<template>
     <div>
        <ul>
          <li v-for="m in messageList" :key="m.id">
            <!-- <router-link :to="`/home/message/details?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->
              <!-- <router-link :to="{
                path:'/home/message/details',
                query:{
                    id:m.id,
                    title:m.title
                }
              }">
              {{ m.title }}
            </router-link> -->


            <!-- <router-link :to="`/home/message/details/${m.id}/${m.title}`">{{ m.title }}</router-link> -->
            <router-link :to="{
                name:'detalis',
                params:{
                    id:m.id,
                    title:m.title
                }
              }">
              {{ m.title }}
            </router-link>

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
          messageList:[
            {id:'001',title:'这是标题1'},
            {id:'002',title:'这是标题2'},
            {id:'003',title:'这是标题3'},
          ]
        }
    },
}
</script>
