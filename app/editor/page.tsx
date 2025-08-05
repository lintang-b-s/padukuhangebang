"use client";
import React, { useState, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export default function HtmlEditor() {
  const { quill, quillRef } = useQuill();

  const [html, setHtml] = useState<string>(
    "<p><strong>Hello world</strong>!</p>"
  );

  useEffect(() => {
    if (!quill) return;
    quill.clipboard.dangerouslyPasteHTML(html);
  }, [quill]);

  useEffect(() => {
    if (!quill) return;
    quill.on("text-change", () => {
      setHtml(quill.root.innerHTML);
    });
  }, [quill]);

  return (
    <div className="flex flex-col items-center w-full">
      <div style={{ width: 500, height: 300 }}>
        <div ref={quillRef} />
      </div>
      <div className="w-full p-4 mt-8 border">
        <h4>Rendered HTML:</h4>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
