import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const CryptoNewsHeaders={
    
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '31ed667d79msh34dae32260b2d03p1545f5jsn5ef9e714d6b3',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url) => ({url,headers:CryptoNewsHeaders});
export const CryptoNewsApi = createApi({
    reducerPath:'CryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});
export const {
    useGetCryptoNewsQuery,
}=CryptoNewsApi;