import React from 'react';
import s from './userCard.module.scss';
import logo from '../../assets/img/logo.png';

export const UserCard = () => {
  return (
    <div className={s.backdrop}>
     <div className={s.container}>
           <div className={s.imageContainer}>
               <img className={s.logo} src={logo} alt="Logo"></img>
           </div>
           <div className={s.userContainer}>
          <div className={s.line}></div>
            <div className={s.userAvatarContainer}>
              <div className={s.userImageContainer}>
                   <img className={s.userPhoto}></img>
              </div>
            </div>
              <p className={s.twitts}>777 tweets</p>
              <p className={s.followers}>100500 followers</p>
               <button className={s.button}>Follow</button>
           </div>
      {/* <div>Follower Count: {followerCount.toLocaleString()}</div>
      <button onClick={handleFollowClick} style={{ backgroundColor: isFollowing ? 'green' : 'blue' }}>
        {isFollowing ? 'Following' : 'Follow'}
      </button> */}
      </div>
    </div>
  );
};
