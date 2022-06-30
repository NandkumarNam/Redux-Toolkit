import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from "./userSlice";

export const UserView = () => {
    const userList = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            <h2>List of Users</h2>
            {userList.loading && <div>Loading...</div>}
            {!userList.loading && userList.error ? <div>Error: {userList.error}</div> : null}
            {!userList.loading && userList.users.length ? (
                <ul>
                    {userList.users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>               
            ) : null }
        </div>
    )
}