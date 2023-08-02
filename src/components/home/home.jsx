import React from 'react';
import { Link } from 'react-router-dom';
import s from './home.module.scss';

export const Home = () => {
        return (
        <div className={s.container}>
            <div className={s.header}>
                <h1 className={s.headertext}>Mini Twitter</h1>
                <p className={s.descr}>Welcome to Mini Twitter! This is a mini social media service where you can read peoples thoughts and follow intrested you pages!</p>
                <button className={s.tweets}>
                    <Link to="/tweets">
                        Go to tweets
                    </Link>
                </button>
            </div>
        </div>
    );
};
