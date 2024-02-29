import React from 'react';
import './HomePage.css'; // Importação do arquivo de estilos CSS

const HomePage = () => {
  return (
    <div className='container-fluid container-home'>
      <div className='row'>
        <div className='col-6'>
          <div className="position-relative">
            <img src="/images/kindpng_1561276.png" alt="Facebook" className="w-100" />
            <img src="/images/coruja png.png" alt="Facebook" style={{ marginLeft: '135px', width: '50%' }} className="position-absolute top-0 start-0 mt-5" />
          </div>
        </div>
        <div className='col-6'>
          <div>
            <p className="hello-message">Olá, amigo!</p>
          </div>
          <div>
            <p className="message">Bem-vindo ao QuizMJV, uma experiência interativa de aprendizado e desafio desenvolvida especialmente para a comunidade MJV. Este projeto faz parte da iniciativa educacional da MJV, proporcionando aos participantes uma oportunidade única de testar e aprimorar seus conhecimentos em uma variedade de temas.</p>
          </div>
          <div className='btn-div'>
            <button className='buttonCriarConta' type="submit">Acessar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
