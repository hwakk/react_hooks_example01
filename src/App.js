import logo from './logo.svg';
import './App.css';
import React from 'react';
import dogHooks from './dogHooks';

function App() {
  const [data, refresh] = dogHooks();
  
  return (
    <div className='App'>
      <img src={data?.message} />
      <button onClick={refresh}>
        REFRESH!
      </button>
    </div>
  );
}

export default App;
