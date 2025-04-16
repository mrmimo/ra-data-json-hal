declare module 'ra-data-json-hal' {
  import { DataProvider, HttpClient } from 'react-admin';

  export function generateHttpClient(url: string, options: object): HttpClient;

  const jsonHalDataProvider: (
    apiUrl: string,
    httpClient?: HttpClient
  ) => DataProvider;

  export default jsonHalDataProvider;
}