<template>
  <div>Product details for {{ id }}</div>
  <pre>{{ product }}</pre>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { getData } from "~~/helpers/get-data.helper";

const id: string | string[] = useRoute().params.id;
definePageMeta({
  layout: "products",
});
//fetch profucts
const getProductInfo = new getData();
const res = await getProductInfo.fetchData("/products/" + id);
const product: Ref<any[]> = res.data;
</script>

<style scoped></style>
