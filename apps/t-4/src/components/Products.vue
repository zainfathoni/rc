<template>
  <div>
    <h1>Products</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="!errorMessage">
      <ol>
        <li v-for="item in backendData.slice(0, props.itemsToShow)" :key="item.id">
          {{ item.title }} - ${{ item.price }}
        </li>
      </ol>
    </div>
    <div v-else>
      <p>Error: {{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Product {
  id: number;
  title: string;
  price: number;
}

const props = defineProps({ itemsToShow: { type: Number, default: 5 } });

const loading = ref(false);
const backendData = ref<Product[]>([]);
const errorMessage = ref<string>();

onMounted(() => {
  loading.value = true;
  fetch("https://dummyjson.com/products/")
    .then((response) => response.json())
    .then((data) => {
      backendData.value = data.products;
      loading.value = false;
    })
    .catch((error: Error) => {
      console.error('Error:', error);
      loading.value = false;
      errorMessage.value = error.message;
    });
})
</script>

<style scoped>
ol {
  text-align: left
}
</style>
