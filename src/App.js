import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/home/HomePage';
import Ranking from './components/rankin/Rankin';
import SignUp from './components/SignUp/SignUp';
import Sobre from './components/sobreQuiz/Sobre';
import Consulta from './components/consulta/Consulta';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/create-account" element={<SignUp />} /> 
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/consulta" element={<Consulta/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
