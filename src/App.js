import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReceitaDetalhes from './pages/ReceitaDetalhes';
import AdicionarReceita from './pages/AdicionarReceita';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receita/:id" element={<ReceitaDetalhes />} />
        <Route path="/adicionar-receita" element={<AdicionarReceita />} />
      </Routes>
    </div>
  );
};

export default App;
