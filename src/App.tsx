import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Configuracao from './page/Configuracao';
import Sorteio from './page/Sorteio';

function App() {
  return (
    <Router>
      <RecoilRoot>
          <Routes>
            <Route path='/' element={<Configuracao/>} />
            <Route path='/sorteio' element={<Sorteio/>} /> 
          </Routes>
      </RecoilRoot>
    </Router>
  );
}

export default App;
