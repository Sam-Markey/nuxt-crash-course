export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyKey, baseUrl } = useRuntimeConfig();
  const uri = `${baseUrl}/latest?currencies=${code}&apikey=${currencyKey}`;

  const { data } = await $fetch(uri);

  return { data };
});
