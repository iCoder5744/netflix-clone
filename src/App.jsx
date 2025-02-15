import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Player from './pages/Player';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/lging' element={<Login />} />
        <Route path="/player/:videoId" element={<Player />} />  {/* Dynamic Route */}
      </Routes>
    </div>
  );
}

export default App;
