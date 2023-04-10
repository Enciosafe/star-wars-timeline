// src/App.tsx
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Timeline from './components/Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Timeline />
      </main>
    </div>
  );
}

export default App;
