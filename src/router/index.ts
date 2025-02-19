import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});
//全局守卫.在路由跳转前进行拦截.检测是否登录
/*
router.beforeEach((to, from, next) => {
  console.log(to.params.id, from.params.id);
  if (!logined && to.name !== "login") {
    next({ name: "login" });
  } else {
    next();
  }
});*/

router.afterEach((to, from) => {
  console.log("afterEach", to, from);
  //修改页面标题
  document.title = (to.meta.title as string) || "默认标题";
  /*
  //发送到服务器，记录用户请求地址
  fetch("/api/log", {
    method: "POST",
    body: JSON.stringify({ to, from }),
  });*/
});
export default router;
