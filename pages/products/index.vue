import { getData } from '../../helpers/get-data.helper';
<template>
  <div>
    Products
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products">
        <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { getData } from "~~/helpers/get-data.helper";

definePageMeta({
  layout: "products",
});

//fetch profucts
const getProducts = new getData();
const res = await getProducts.fetchData("/products");
const products: Ref<any[]> = res.data;
</script>

<style scoped></style>
