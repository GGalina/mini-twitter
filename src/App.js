import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../src/pages/home';
import { TweetsPage } from '../src/pages/tweets';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
