import React from "react";
import './Articles.css';

const LinuxArticles = () => {
  return (
    <div className='articles-page'>
      <h1>Networking</h1>
      <ul>
        <li><a href="/articles/linux/boot-process">Linux Boot Process</a></li>
        <li><a href="/articles/linux/vim-commands">10 Vim Commands Every Sysadmin Should Know</a></li>
        <li><a href="/articles/linux/vim-commands">Understanding /etc/passwd and /etc/shadow</a></li>
        <li><a href="/articles/linux/vim-commands">How to Use grep Like a Pro</a></li>
        <li><a href="/articles/linux/vim-commands">Mastering File Permissions with chmod</a></li>
        <li><a href="/articles/linux/vim-commands">Using awk for Quick Data Extraction</a></li>
        <li><a href="/articles/linux/vim-commands">Customizing Your Bash Prompt (PS1)</a></li>
        <li><a href="/articles/linux/vim-commands">How to Monitor Disk Usage with du and df</a></li>
      </ul>
    </div>
  );
};

export default LinuxArticles;