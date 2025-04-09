// src/App.js
import React from 'react';
import Editor from './editor';
import FileExplorer from './fileexplorer';
import './App.css';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <FileExplorer />
      <Editor />
    </div>
  );
};

export default App;
