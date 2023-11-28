import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import PostsList from '../../entities/posts/ui/PostsList';
import UserList from '../../entities/user/ui/UserList';

interface IPostsLayoutProps {

};

const PostsLayout:FC<IPostsLayoutProps> = ({}) => {
    return (
        <div>
            <div className="flex flex-row">
                <div className="basis-1">
                    <Outlet />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="max-w-xs">
                    <PostsList />
                    
                </div>
                <div className="max-w-xs">
                    <UserList />
                </div>
            </div>
        </div>
    )
};

export default PostsLayout;