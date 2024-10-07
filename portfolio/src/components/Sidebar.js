import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/whoami'>WhoAmI</Link></li>
                <li><Link to='/articles'>Articles</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;