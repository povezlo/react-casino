import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ROUTES } from '../../app/router/utils';

interface IPostsLayoutProps {

}

const PostsLayout:FC<IPostsLayoutProps> = ({}) => {
    return (
        <div>
            <div className="flex gap-4">
                <Link to={ROUTES.listWith.posts}>Post List</Link>
            </div>
            <div className="flex gap-4">
                <Link to={ROUTES.listWith.users}>User List</Link>
            </div>
            <div className="flex flex-row">
                <div className="basis-1">
                    <Outlet />
                </div>
            </div>
        </div>
    )
};

export default PostsLayout;