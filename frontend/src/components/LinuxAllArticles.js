import React from "react";
import MarkdownArticle from "./MarkdownArticle";

// Import all Linux articles
import LinuxVimCommands from "../articles/linux/LinuxVimCommands.md";
import LinuxBootProcess from "../articles/linux/LinuxBootProcess.md";


// Article mapping object
const linuxArticles = {
  'vim-commands': LinuxVimCommands,
  'boot-process': LinuxBootProcess,
};

// Single component that handles all Linux articles
export default function LinuxArticles({ articleId }) {
  const articleFile = linuxArticles[articleId];
  
  if (!articleFile) {
    return <div>Article not found</div>;
  }
  
  return <MarkdownArticle file={articleFile} />;
}

// Named exports for backwards compatibility (optional)
export const LinuxVimCommandsComponent = () => (
  <LinuxArticles articleId="vim-commands" />
);

export const LinuxBootProcessComponent = () => (
  <LinuxArticles articleId="boot-process" />
);