import React, { FC, useState } from 'react';
import { useCreatePostsMutation, useGetPostsQuery } from '../api/postApi';

interface IPostsListProps {

}

const PostsList:FC<IPostsListProps> = ({}) => {
    const [ turnOn, setTurnOn ] = useState(false);
    const {
        data: posts,
        isSuccess
    } = useGetPostsQuery(null, {
        refetchOnMountOrArgChange: true,
        skip: !turnOn,
    });

    const [createPosts] = useCreatePostsMutation();

    const onClick = () => {
        createPosts({
            body: 'Description',
            title: 'Test',
            userId: 1,
        })
    }

    const onTurn = () => {
        setTurnOn(true);
    }

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={onTurn}>Turn on fetch</button>
            <button onClick={onClick}>Add post</button>
                {isSuccess && posts?.map(post => (
                    <div>{post.title}</div>
                ))}
        </div>
    )
};

export default PostsList;