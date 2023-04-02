<template>
    <div>
        <button @click="getStudent">获取学生信息</button>

        <button @click="getCar">获取汽车信息</button>
    </div>

</template>

<script>
    import axios from "axios"
    export default {
        name:"App",
        methods:{
            getStudent(){
               axios.get("http://localhost:8080/api/students").then(
                    response=>{
                        console.log("请求成功");
                        console.log(response.data);
                    },
                    error=>{
                        console.log("请求失败");
                        console.log(error.message);
                    }
               )
            },
            getCar(){
                axios.get("http://localhost:8080/foo/cars").then(
                    response=>{
                        console.log("请求成功");
                        console.log(response.data);
                    },
                    error=>{
                        console.log("请求失败");
                        console.log(error.message);
                    }
               )
            }
        }
       
    }
</script>
