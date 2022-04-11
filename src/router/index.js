import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import LogOut from "../views/LogOut.vue";
import PostsIndex from "../views/PostsIndex.vue";
import NewPost from "../views/NewPost.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: TestView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/Login",
    name: "Login",
    component: LogIn,
  },
  {
    path: "/Logout",
    name: "Logout",
    component: LogOut,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostsIndex,
  },
  {
    path: "/posts/new",
    name: "newpost",
    component: NewPost,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
