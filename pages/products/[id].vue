<template>
  <Head>
    <Title>Nuxt Dojo | {{ product.title }}</Title>
    <Meta name="description" :content="product.description"></Meta>
  </Head>
  <ProductDetails :product="product" />
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
// if the id is different it will perform a new fetch
const res = await getProductInfo.fetchData("/products/" + id);

const product: Ref<any> = res.data;
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found :-(",
    fatal: true,
  });
}
</script>

<style scoped></style>
