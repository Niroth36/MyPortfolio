import React from 'react';
import './Articles.css';

const Articles = () => {
    return (
        <div className='articles-page'>
            <h1>My Articles</h1>
            <ul>
                <li><a href='/linux'>Linux & Shell Mastery</a></li>
                <li><a href='/networking'>Networking & Services</a></li>
                <li><a href='/containers'>Containers & Virtualization</a></li>
                <li><a href='/automation'>Automation & Monitoring</a></li>
                <li><a href='/security'>Security & Troubleshooting</a></li>
            </ul>
        </div>
    );
};

export default Articles;