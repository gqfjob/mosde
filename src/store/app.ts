import { defineStore } from "pinia";
// 创建一个应用状态管理器, 用于管理应用状态
export const appStore = defineStore("app", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
