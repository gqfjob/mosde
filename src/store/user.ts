import { defineStore } from "pinia";

export const userAppStore = defineStore("user", {
  state: () => ({
    username: "John",
    email: "john@example.com",
    userid: "1234567890",
    token: "1234567890",
    avatar: "https://avatars.githubusercontent.com/u/1234567890",
    role: "admin",
    permissions: ["user:read", "user:write"],
  }),
  getters: {
    getUserInfo: (state) => state,
  },
  actions: {
    setUserInfo(userInfo: any) {
      this.username = userInfo.username;
      this.email = userInfo.email;
      this.userid = userInfo.userid;
    },
    setToken(token: string) {
      this.token = token;
    },
    setAvatar(avatar: string) {
      this.avatar = avatar;
    },
  },
});
