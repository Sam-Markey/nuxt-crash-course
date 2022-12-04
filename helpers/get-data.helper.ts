export class getData {
  baseUrl: string = "https://fakestoreapi.com";

  fetchData(endpoint: string): Promise<any> {
    return useFetch<any[]>(this.baseUrl + endpoint);
  }
}
