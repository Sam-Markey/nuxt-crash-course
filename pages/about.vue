<template>
  <div>
    <h2>About page</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum corrupti
      fuga eligendi delectus porro vitae et voluptatem sequi possimus quia sunt
      debitis perferendis neque, eveniet amet, mollitia in. Iste, ea?
      Repellendus facilis eos cum autem explicabo est quaerat possimus eum sit
      iste blanditiis, adipisci rerum eveniet? Cupiditate suscipit ratione sit
      perferendis dolore, iusto, repellat repudiandae, est aliquid molestiae
      quia neque.
    </p>
  </div>
  <pre>{{ data }}</pre>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/currency/GBP");
console.log(data.value);
</script>

<style scoped></style>
