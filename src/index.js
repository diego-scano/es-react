import React from 'react';
import ReactDOM from "react-dom/client";
import Header from './header';
import PostsList from './postslist';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
        <PostsList />
    </>
)