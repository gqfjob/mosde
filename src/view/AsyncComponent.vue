<template>
  <div>这是异步加载的组件</div>
</template>

<script setup lang="ts">
// 模拟异步加载延迟
await new Promise((resolve) => setTimeout(resolve, 2000));
</script>
