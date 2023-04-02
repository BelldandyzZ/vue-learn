export  default {
    install(Vue){
        Vue.prototype.hello = ()=>{
            alert("hello world")
        }
    }
}