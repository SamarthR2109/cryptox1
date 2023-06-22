import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const CryptoApiHeaders={
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '31ed667d79msh34dae32260b2d03p1545f5jsn5ef9e714d6b3',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url,headers:CryptoApiHeaders});

export const CryptoApi = createApi({
    reducerPath:'CryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails:builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory:builder.query({
            query:({coinId,timeperiod})=>createRequest(`/coin/${coinId}/history/${timeperiod}}`)
        })
    })
});
export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
}=CryptoApi;
