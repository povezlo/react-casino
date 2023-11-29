import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import MainPage from '../../pages';
import PostsLayout from '../../layouts/PostsLayout/PostsLayout';
import PostsPage from '../../pages/posts';
import PostsList from '../../entities/posts/ui/PostsList';
import UserList from '../../entities/user/ui/UserList';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      }
    ]
  },
  {
    path: 'posts',
    Component: PostsLayout,
    children: [
      {
        index: true,
        Component: PostsPage,
      },
      {
        path: 'postlist',
        Component: PostsList,
      },
      {
        path: 'userlist',
        Component: UserList,
      }
    ],
  },
])