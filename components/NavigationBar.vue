<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <nuxt-link to="/" class="font-bold text-3xl">nuxt Dojo Merch</nuxt-link>
      <ul class="flex gap-4">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li><nuxt-link to="/about">About</nuxt-link></li>

        <li><nuxt-link to="/products">Products</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>
<style>
.router-link-exact-active {
  color: #40a269;
}
</style>
