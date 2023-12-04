import { IPost, IRequestCreatePostApi } from '../model/Post';
import mainApi from '../../../app/store/mainApi';

enum TAGS {
    POST = ' POST',
}

const enchancedApi = mainApi.enhanceEndpoints({
    addTagTypes: [TAGS.POST]
})

const postApi = enchancedApi.injectEndpoints({
    endpoints: (builder) => ({
    getPosts: builder.query<IPost[], null>({
        query: () => `posts`,
        providesTags: [TAGS.POST],
    }),
    createPosts: builder.mutation<IPost[], IRequestCreatePostApi>({
        query: ({ body }) => ({
            url: 'posts',
            method: 'POST',
            body
        }),
        invalidatesTags: [TAGS.POST],
    }),
    }),
})

export const {
    useGetPostsQuery,
    useCreatePostsMutation,
} = postApi;

export default postApi;