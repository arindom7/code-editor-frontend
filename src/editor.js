// src/Editor.js
import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import 'monaco-editor/min/vs/editor/editor.main.css';

const Editor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = monaco.editor.create(editorRef.current, {
        value: [
          'function x() {',
          '\tconsole.log("Hello world!");',
          '}'
        ].join('\n'),
        language: 'javascript',
        theme: 'vs-dark',
      });

      // Cleanup on unmount
      return () => editor.dispose();
    }
  }, []);

  return <div ref={editorRef} style={{ height: '100vh', width: '100%' }}></div>;
};

export default Editor;
