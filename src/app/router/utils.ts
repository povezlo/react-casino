export const ROUTES = {
  main: '/',
  posts: 'posts',
  listWith: {
    posts: 'postlist',
    users: 'userlist',
  },
}

export const generateUrl = (url: string, params?: any) => {
  return url;
}