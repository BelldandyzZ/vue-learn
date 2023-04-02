 export const mixinOfMethods = {
    methods:{
        showMsg(){
            alert(`${this.name}`)
        }
    },
    data(){
        return {
            x:100,
            y:200
        }
    },
    mounted() {
        console.log('这是混入中的mounted');  
    },
}