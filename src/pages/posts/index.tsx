import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../app/router/utils';

interface IPostsPageProps {

};

const PostsPage:FC<IPostsPageProps> = ({}) => {
    return (
        <div className="flex gap-4">
            <Link to={ROUTES.main}>Home</Link>
        </div>
    )
};

export default PostsPage;