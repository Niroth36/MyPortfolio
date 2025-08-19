import React from 'react';
import './Articles.css';

const Articles = () => {
    return (
        <div className='articles-page'>
            <h1>My Articles</h1>
            <ul>
                <li><a href='/article1'>How to Build a Portfolio with React and FastAPI</a></li>
                <li><a href='/article2'>PostgreSQL Best Practices for Beginners</a></li>
            </ul>
        </div>
    );
};

export default Articles;