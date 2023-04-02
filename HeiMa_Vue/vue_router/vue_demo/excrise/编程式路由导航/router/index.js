import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Message from '../views/Message.vue'
import News from '../views/News.vue'
import Details from '../views/Details.vue'



export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About,
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        { 
                            name:'detalis',
                            path:'details/:id/:title',
                            component:Details,
                            props({params:{id,title}}){
                                return {
                                    id,
                                    title
                                }
                            }
                        }
                    ]
                },
            ]
        },
    ]    
})