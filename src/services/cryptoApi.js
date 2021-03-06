import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
	"x-rapidapi-host": process.env.REACT_APP_API_HOST,
	"x-rapidapi-key": process.env.REACT_APP_API_KEY,
};
const baseUrl = process.env.REACT_APP_BASE_URL;
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (itemsNumber) => createRequest(`/coins?limit=${itemsNumber}`),
		}),
	}),
});

export const { useGetCryptosQuery } = cryptoApi;
