<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="flex flex-row items-center justify-center">
      <router-link to="/about" class="mr-4 text-blue-500 font-bold">
        About
      </router-link>
      <router-link to="/" class="mr-4 text-blue-500 font-bold">
        Home
      </router-link>
      <router-link to="/users/tom" class="mr-4 text-blue-500 font-bold">
        Users-tom
      </router-link>
      <router-link
        to="/users/jerry?username=gipq"
        class="mr-4 text-blue-500 font-bold"
      >
        Users-jerry
      </router-link>
      <router-link to="/users/tom/profile" class="mr-4 text-blue-500 font-bold">
        Users-tom-profile
      </router-link>
      <router-link to="/users/tom/posts" class="mr-4 text-blue-500 font-bold">
        Users-tom-posts
      </router-link>
      <router-link to="/dog" class="mr-4 text-blue-500 font-bold">
        Dog
      </router-link>
    </div>
    <div class="flex flex-col items-center justify-center w-full mt-10">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
