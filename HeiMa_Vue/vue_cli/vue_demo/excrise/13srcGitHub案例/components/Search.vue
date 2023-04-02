<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" v-model="keyword" placeholder="enter the name you search"/>&nbsp;
        <button @click="getUsers">Search</button>
      </div>
    </section>
</template>

<script>
    import axios from 'axios';
    export default {
        name:'Search',
        data(){
            return{
                keyword:''
            }
        },
        methods:{
            getUsers(){
                this.$bus.$emit('getUsers',{isFirst:false, isLoading:true,errMessage:'',  users:[]});
                axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                    response=>{
                        this.$bus.$emit('getUsers',{isFirst:false, isLoading:false,errMessage:'', users:response.data.items});
                    },
                    error=>{
                        this.$bus.$emit('getUsers',{isFirst:false, isLoading:false,errMessage:error.message, users:[]});
                    }
                )
            }
        }
    }
</script>