import React from "react";
import MarkdownArticle from "./MarkdownArticle";
import linuxBootProcess from "../articles/linux/LinuxBootProcess.md";

export default function LinuxBootProcess() {
  return <MarkdownArticle file={linuxBootProcess} />;
}
