import { IUser } from '../model/User'
import mainApi from '../../../app/store/mainApi';

const userApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], null>({
      query: () => `users`,
    }),
  }),
})

export const {
  useGetUsersQuery,
} = userApi

export default userApi;
