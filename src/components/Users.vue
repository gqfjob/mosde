<template>
  <div>
    <h1>{{ id }}</h1>
    <p>参数查询"$route.query.username":{{ $route.query.username }}</p>
    <p>完整路径"$route.fullPath":{{ $route.fullPath }}</p>
    <p>路径"$route.path":{{ $route.path }}</p>
    <p>哈希"$route.hash":{{ $route.hash }}</p>
    <p>匹配"$route.matched":{{ $route.matched }}</p>
    <p>名称"$route.name":{{ $route.name }}</p>
    <p>元数据"$route.meta":{{ $route.meta }}</p>
    <p>参数"$route.params":{{ $route.params }}</p>
    <p>查询"$route.query":{{ $route.query }}</p>
    <p>重定向来源"$route.redirectedFrom":{{ $route.redirectedFrom }}</p>
  </div>
  <button @click="handleClick">点击</button>
  <Button @click="handleClick2">点击2</Button>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { Button } from "@/components/ui/button";
import {
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  useRoute,
  useRouter,
} from "vue-router";
//通过props接收路由参数
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const route = useRoute();
const router = useRouter();
/*
//监听params.id
watch(
  () => route.params.id,
  (newVal, oldVal) => {
    //fetch api 到后台加载最新数据
    console.log(newVal, oldVal);
  },
  {
    immediate: true,
  }
);*/
//新版本中没有onBeforeRouteEnter，使用watch+useRoute替代
const initialRoutePath = route.path;
watch(
  () => route.path,
  (newPath, oldPath) => {
    console.log("oldPath", oldPath);
    console.log("newPath", newPath);
    if (oldPath === undefined) {
      // 首次进入路由时执行的逻辑
      console.log("Entering the route for the first time");
      // 可以在这里进行异步数据获取等操作
    } else if (newPath !== initialRoutePath) {
      // 路由变化时执行的逻辑
      console.log("Route path changed:", newPath);
    }
  }
);
onBeforeRouteUpdate((to, from, next) => {
  console.log(to.params.id, from.params.id);
  next();
});

onBeforeRouteLeave((to, from, next) => {
  console.log(to.params.id, from.params.id);
  next();
});
//编程式路由使用path跳转
const handleClick = () => {
  router.push({
    path: "/users/goge",
    query: { username: "bug" },
  });
};
//使用name跳转
const handleClick2 = () => {
  router.push({
    name: "users",
    params: { id: "tom" },
    query: { username: "bug" },
  });
};
</script>
