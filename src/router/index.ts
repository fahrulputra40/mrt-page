import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/LoginView.vue'
import IndexView from '../views/IndexView.vue';
import DashboardView from "../views/DashboardView.vue";
import DashboardIot from "../views/DashboardIotView.vue";
import DashboardSensor from "@/views/DashboardIoTSensorView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = <RouteRecordRaw[]>[
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/login',
    name: 'login',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: "dashboard",
    component: DashboardView
  },
  {
    path: '/dashboard-iot',
    name: "dashboard-iot",
    component: DashboardIot
  },
  {
    path: "/dashboard-sensor/:id",
    name: "dashboard-sensor",
    component: DashboardSensor
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  if(from.name == undefined && to.name !== "index"){
    next({
      path: "/",
      query:{
        from: to.path
      }
    })
  }
  next()
  return true;
})

export default router
