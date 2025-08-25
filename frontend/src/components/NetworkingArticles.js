import React from "react";
import './Articles.css';

const NetworkingArticles = () => {
  return (
    <div className='articles-page'>
      <h1>Linux & Shell Mastery</h1>
      <ul>
        <li><a href="/articles/linux/boot-process">Understanding IP Addresses and Subnets</a></li>
      </ul>
    </div>
  );
};

export default NetworkingArticles;