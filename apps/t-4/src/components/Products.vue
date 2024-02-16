<template>
  <div>
    <h1>Products</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <ol>
        <li v-for="item in backendData.slice(0, itemsToShow)" :key="item.id">
          {{ item.title }} - ${{ item.price }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
interface Product {
  id: number;
  title: string;
  price: number;
}

export default {
  props: {
    itemsToShow: {
      type: Number,
      default: 5,
    },
  },
  data(): { loading: boolean; backendData: Product[] } {
    return {
      loading: false,
      backendData: [],
    };
  },
  mounted() {
    this.loading = true;
    fetch("https://dummyjson.com/products/")
      .then((response) => response.json())
      .then((data) => {
        this.backendData = data.products;
        this.loading = false;
      });
  },
};
</script>

<style scoped>
ol {
  text-align: left
}
</style>
