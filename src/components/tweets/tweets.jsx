import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/operations';
import { selectUsers, selectTotalTweets, selectFollowing } from '../../redux/selectors';
import s from './tweets.module.scss';
import { UserCard } from '../userCard/userCard';
import { Link } from 'react-router-dom';

export const Tweets = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const totalTweets = useSelector(selectTotalTweets);
    const following = useSelector(selectFollowing)
    const [selectedUser, setSelectedUser] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchUsers(currentPage))
    }, [dispatch, currentPage]);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
    };

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleUserUpdate = (updatedData) => {
        setSelectedUser((prevUser) => ({
        ...prevUser,
        ...updatedData,
        }));
    };

    const handleGoBack = () => {
        dispatch({ type: 'users/reset' });
    };



    return (
        <div className={s.container}>
            <div className={s.goBackContainer}>
                <Link to="/">
                    <button className={s.goBack} onClick={handleGoBack}>Back</button>
                </Link>
            </div>
            {selectedUser && <UserCard selectedUser={selectedUser}
                closeModal={handleCloseModal}
                onUpdate={handleUserUpdate}
                following={following}
            />}
            {users && users.map((user) => (
                <div className={s.userContainer} key={user.id}>
                    <div className={s.userImageContainer} onClick={() => handleUserClick(user)}>
                        <img className={s.userPhoto} src={user.avatar} alt="avatar" />
                    </div>
                    <div className={s.tweetsContainer}>
                        <p className={s.name}>{user.user}</p>
                            <p className={s.twitt}>{user.tweets[0].text}</p>
                    </div>
                </div>
            ))}
            {totalTweets > 2 && (
                <button className={s.loadMoreButton} onClick={handleLoadMore}>
                    Load More
                </button>
            )}
        </div>
    );
};
