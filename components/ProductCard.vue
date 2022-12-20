<template>
  <div
    class="card text-center flex-1 white shadow-md rounded-lg p-2 flex justify-center items-center flex-col"
  >
    <NuxtLink :to="`/products/${product.id}`">
      <img :src="product.image" alt="Image of the product" />
      <h3 class="text-gray-500 m-2 truncate self-start">
        {{ product.title }}
      </h3>
      £{{ product.price }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { product } = defineProps({ product: { required: true, type: Object } });
</script>

<style scoped>
.card {
  height: 300px;
  width: 100%;
  background: white;
}
h3 {
  width: 90%;
}
a {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
img {
  max-height: 120px;
  max-width: 70%;
  margin: auto;
}
</style>
