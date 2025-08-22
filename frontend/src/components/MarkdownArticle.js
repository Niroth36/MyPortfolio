import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownArticle({ file }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [file]);

  return (
    <div className="article-content p-4 text-green-400 font-mono bg-black min-h-screen">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
