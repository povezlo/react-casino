export const ROUTES = {
  main: '/',
  auth: {
    login: 'auth/login',
    register: 'auth/register',
  },
  posts: 'posts',
}

export const generateUrl = (url: string, params?: any) => {
  return url;
}