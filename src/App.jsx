// src/App.js
import React from 'react';
import Editor from './Editor';
import FileExplorer from './FileExplorer';
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
