export default defineEventHandler(async (event) => {
  // handle query params

  //api call with private key
  const { data }: any = (await $fetch(
    "https://api.currencyapi.com/v3/currencies?apikey=EV950VXSg2PkJfKzXPublq4WRmNCwsAaBuVVUR14"
  )) as Promise<any>;
  console.log("test");
  return {
    message: data,
  };
});
