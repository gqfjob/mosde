<template>
  <div>
    <!-- 使用 Suspense 组件包裹异步组件 -->
    <Suspense>
      <!-- 加载中显示的内容 -->
      <template #fallback>
        <p>正在加载组件，请稍候...</p>
      </template>
      <!-- 加载成功显示的内容 -->
      <AsyncComponent />
    </Suspense>
    <!-- 错误处理，使用 errorCaptured 捕获异步组件加载错误 -->
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

// 定义异步组件，并配置错误处理
const AsyncComponent = defineAsyncComponent({
  loader: () => import("@/view/AsyncComponent.vue"),
  // 加载组件时的延迟时间，在该时间内不显示 fallback 内容
  delay: 200,
  // 超时时间，超过该时间加载未完成则触发错误
  timeout: 3000,
  // 错误处理函数
  onError(error, retry, fail, attempts) {
    if (error.message.match(/fetch/) && attempts < 3) {
      // 重试逻辑
      retry();
    } else {
      // 失败逻辑
      fail();
    }
  },
});

// 用于存储错误信息
const error = ref<Error | null>(null);

// 错误捕获钩子
const errorCaptured = (err: Error) => {
  error.value = err;
  //返回false，则全局errorHandler无法捕获
  return false;
};
</script>
