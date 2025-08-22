import React from "react";
import MarkdownArticle from "./MarkdownArticle";
import LinuxVimCommands from "../articles/linux/LinuxVimCommands.md";

export default function LinuxBootProcess() {
  return <MarkdownArticle file={LinuxVimCommands} />;
}
