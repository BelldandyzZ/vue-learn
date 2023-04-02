import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Message from '../views/Message.vue'
import News from '../views/News.vue'
import Details from '../views/Details.vue'



const router =  new VueRouter({
    routes:[
        {
            name:'about',
            path:'/about',
            component:About,
        },
        {   
            name:'home',
            path:'/home',
            component:Home,
            children:[
                {
                    name:'news',
                    path:'news',
                    component:News,
                    meta:{isAuth:true},
                },
                {
                    name:'message',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true},
                    beforeEnter:(to,from,next)=>{
                        console.log('进入独享路由守卫');
                        next();
                    },
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

router.beforeEach((to,from,next)=>{

    //切换到该to组件之气那是否需要进行判断，不需要判断直接放行
    if(!to.meta.isAuth) {
        console.log('不需判断');
        return next();
    }

    console.log('需判断');
    //程序走到这里说明to组件需要判断，有isAuth这个属性，根据判断规则选择是否放行
    if(localStorage.getItem('school') === 'atguigu')  {
        console.log('判断条件成立，进行跳转');
        next();
    }else{
        console.log('判断条件不成立');
    }

})

router.afterEach((to,from)=>{
    console.log('全局后置路由守卫执行');
    
    document.title = to.name
})

export default router;