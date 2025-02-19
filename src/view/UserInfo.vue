<template>
  <div>
    <h1>User Info</h1>
    <p>{{ store.getUserInfo.username }}</p>
    <p>{{ store.getUserInfo.email }}</p>
    <p>{{ store.getUserInfo.userid }}</p>
    <p>{{ store.getUserInfo.token }}</p>
    <p>{{ store.getUserInfo.avatar }}</p>
    <p>{{ store.getUserInfo.role }}</p>
    <p>{{ store.getUserInfo.permissions }}</p>
  </div>
</template>

<script setup lang="ts">
import { userAppStore } from "@/store/user";

const store = userAppStore();
</script>
