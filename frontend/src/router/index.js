import Vue from "vue"
import VueRouter from "vue-router"
import IndexView from "@/views/IndexView.vue"
import DetailView from "@/views/DetailView.vue"
import CommunityView from "@/views/CommunityView.vue"
import PostDetailView from "@/views/PostDetailView.vue"
import PostCreateView from "@/views/PostCreateView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView,
  },
  {
    path: "/detail/:tmdb_id",
    name: "detail",
    component: DetailView,
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/community",
    name: "community",
    component: CommunityView,
  },
  {
    path: "/community/create",
    name: "create_post",
    component: PostCreateView,
  },
  {
    path: "/posts/:post_pk",
    name: "post_detail",
    component: PostDetailView,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
