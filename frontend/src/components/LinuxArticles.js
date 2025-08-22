import React from "react";
import './Articles.css';

const LinuxArticles = () => {
  return (
    <div className='articles-page'>
      <h1>Linux & Shell Mastery</h1>
      <ul>
        <li><a href="/articles/linux/boot-process">Linux Boot Process</a></li>
        <li><a href="/articles/linux/vim-commands">10 Vim Commands Every Sysadmin Should Know</a></li>
      </ul>
    </div>
  );
};

export default LinuxArticles;