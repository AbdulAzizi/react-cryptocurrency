import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
	"x-bingapis-sdk": "true",
	"x-rapidapi-host": process.env.REACT_APP_NEWS_HOST,
	"x-rapidapi-key": process.env.REACT_APP_NEWS_KEY,
};

const baseUrl = process.env.REACT_APP_BASE_URL;
const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
	reducerPath: "cryptoNewsApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		newsSearch: builder.query({
			query: ({ newsCategory, count }) =>
				createRequest(`/news?q=${newsCategory}&freshness=Day&textFormat=Raw&safeSearch=off&count=${count}`),
		}),
	}),
});

export const { useNewsSearchQuery } = cryptoNewsApi;
