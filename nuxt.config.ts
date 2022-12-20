// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Sams Products",
      meta: [{ name: "description", content: "Everything about nuxt 3" }],
      link: [{ rel: "stylesheet", href: "./assets/css/tailwind.css" }],
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
    baseUrl: process.env.BASE_URL,
  },
});
