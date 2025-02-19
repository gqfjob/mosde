<template>
  <div>
    <h1>DogView</h1>
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <img v-else :src="dog.message" alt="dog" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

const dog = ref({});
const isLoading = ref(true);
const error = ref<Error | null>(null);

onMounted(async () => {
  try {
    const response = await axios.get(`https://dog.ceo/api/breeds/image/random`);
    dog.value = response.data;
  } catch (err) {
    error.value = err as Error;
  } finally {
    isLoading.value = false;
  }
});
</script>
