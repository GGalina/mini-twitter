import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './userCard.module.scss';
import logo from '../../assets/img/logo.png';
import { updateUserData } from '../../redux/operations';
import PropTypes from 'prop-types';


export const UserCard = ({ selectedUser, closeModal, onUpdate, following }) => {
  const dispatch = useDispatch();
  const { id, avatar, tweets, followers } = selectedUser;
  const [followingCount, setFollowingCount] = useState(followers);
  const [localIsFollowing, setLocalIsFollowing] = useState(false);

  useEffect(() => {
    const isFollowingUser = following.some((user) => user.id === id);
    setLocalIsFollowing(isFollowingUser);
  }, [following, id]);

  useEffect(() => {
    window.addEventListener('keydown', closeOnBackdropEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', closeOnBackdropEscape);
      document.body.style.overflow = 'unset';
    };
  },);

  const closeOnBackdropEscape = (event) => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const closeOnBackdropMouse = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const updateFollowing = async () => {
    try {
      const updatedFollowingCount = localIsFollowing ? followingCount - 1 : followingCount + 1;
      setLocalIsFollowing(!localIsFollowing);
      setFollowingCount(updatedFollowingCount);

      const updatedData = {
        ...selectedUser,
        followers: updatedFollowingCount,
      };

      onUpdate(updatedData);

      await dispatch(updateUserData({id, updatedData}));
    } catch (error) {
      console.error('Error updating user data:', error);
      const updatedFollowingCount = localIsFollowing ? followingCount + 1 : followingCount - 1;
      setLocalIsFollowing(!localIsFollowing);
      setFollowingCount(updatedFollowingCount);
    }
  };

  return (
    <div className={s.backdrop} onClick={closeOnBackdropMouse}>
      <div className={s.container}>
        <div className={s.imageContainer}>
          <img className={s.logo} src={logo} alt="Logo" />
        </div>
        <div className={s.userContainer}>
          <div className={s.line}></div>
          <div className={s.userAvatarContainer}>
            <div className={s.userImageContainer}>
              <img className={s.userPhoto} src={avatar} alt="avatar" />
            </div>
          </div>
          <p className={s.twitts}>{tweets.length} tweets</p>
          <p className={s.followers}>{followingCount.toLocaleString()} followers</p>
          <button
            className={localIsFollowing ? s.buttonFollowing : s.button}
            onClick={updateFollowing}
          >
            {localIsFollowing ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  selectedUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.arrayOf(PropTypes.object),
    followers: PropTypes.number.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  following: PropTypes.arrayOf(PropTypes.object).isRequired,
};
