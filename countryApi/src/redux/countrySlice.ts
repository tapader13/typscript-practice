import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countryApi = createApi({
  reducerPath: 'countryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    getCountry: builder.query<CountryType[], void>({
      query: () => `all`,
    }),
  }),
});

export const { useGetCountryQuery } = countryApi;
