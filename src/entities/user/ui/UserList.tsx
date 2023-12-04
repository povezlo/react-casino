import React, { FC } from 'react';
import { useGetUsersQuery } from '../api/userApi';

interface IUserListProps {

}

const UserList:FC<IUserListProps> = ({}) => {
    const {
        data: users,
        isSuccess
    } = useGetUsersQuery(null);
    return (
        <div>
            <h1>Users</h1>
                {isSuccess && users?.map(user => (
                    <div>{user.username}</div>
                ))}
        </div>
    )
};

export default UserList;