import type { RouteRecordRaw } from "vue-router";

import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import NotFound from "@/components/NotFound.vue";
import Users from "@/components/Users.vue";
import UserProfile from "@/components/UserProfile.vue";
import UserPosts from "@/components/UserPosts.vue";
import Login from "@/components/Login.vue";
import DogView from "@/view/DogView.vue";
const logined = true;
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
    name: "home",
    meta: {
      title: "首页",
    },
  },
  {
    path: "/about",
    component: About,
    name: "about",
    meta: {
      title: "关于",
    },
  },
  {
    path: "/users/:id",
    component: Users,
    name: "users",
    props: (route) => ({ id: route.params.id }),
    beforeEnter: (to, from, next) => {
      console.log("beforeEnter...", to, from);
      if (logined) {
        next();
      } else {
        next({ name: "login" });
      }
    },
    children: [
      {
        path: "profile",
        component: UserProfile,
        name: "user-profile",
      },
      {
        path: "posts",
        component: UserPosts,
        name: "user-posts",
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "not-found",
  },
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: {
      title: "登录",
    },
  },
  {
    path: "/dog",
    component: DogView,
    name: "dog",
  },
];
export default routes;
