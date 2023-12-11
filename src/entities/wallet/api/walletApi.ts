import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BASE_URL } from '../../../app/config/network';

enum Tags {
    BALANCE = 'BALANCE',
}

export const walletApi = createApi({
    reducerPath: 'walletApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: [Tags.BALANCE],
    endpoints: (builder) => ({
        getBalance: builder.query({
        query: () => '/wallet',
        providesTags: [Tags.BALANCE],
        }),
        updateBalance: builder.mutation({
        query: (body) => ({
            url: '/wallet',
            body,
        }),
        invalidatesTags: [Tags.BALANCE],
        }),
    }),
})