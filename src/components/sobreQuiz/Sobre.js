import React from 'react';
import './Sobre.css';
import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div className="sobre bg">
      <div className="sobre-titulo">
        <h1>Sobre o QuizMJV</h1>
      </div>
      <div className="sobre-texto text-center">
        <p>O QuizMJV é uma plataforma online que oferece quizzes temáticos para testar seus conhecimentos e se divertir.</p>
        <p>Explore uma diversidade de temas cuidadosamente selecionados. Escolha entre áreas específicas de interesse ou opte por desafios aleatórios para testar sua versatilidade.</p>
      </div>
      <div className="sobre-oferecemos row">
        <h2 className="col-12 text-center">O que oferecemos?</h2>
        <div className="col-md-6 text-center">
          <div className="sobre-item ">
            <span className="sobre-icone">&#10004;</span>
            <h3>Quiz Temático</h3>
            <p>Explore uma diversidade de temas cuidadosamente selecionados.</p>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="sobre-item">
            <span className="sobre-icone">&#10004;</span>
            <h3>Ranking de Pontuações</h3>
            <p>Após cada resposta, veja como você se compara aos outros participantes.</p>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="sobre-item">
            <span className="sobre-icone">&#10004;</span>
            <h3>Conta Personalizada</h3>
            <p>Crie sua conta para acompanhar seu progresso ao longo do tempo.</p>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="sobre-item">
            <span className="sobre-icone">&#10004;</span>
            <h3>Escolha seus Temas</h3>
            <p>Selecione entre uma variedade de temas disponíveis.</p>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="sobre-item">
            <span className="sobre-icone">&#10004;</span>
            <h3>Desafie-se</h3>
            <p>Teste seus conhecimentos em perguntas desafiadoras.</p>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="sobre-item">
            <span className="sobre-icone">&#10004;</span>
            <h3>Como Participar?</h3>
            <p>Crie sua conta e participe de desafios temáticos exclusivos.</p>
          </div>
        </div>
      </div>
      <div className="sobre-chamada text-center">
        <h2>Desafie seus conhecimentos e divirta-se!</h2>
        <p>Crie sua conta agora e comece a jogar!</p>
          <Link to="/create-account">
            <button className="create-account-button">CRIAR CONTA</button>
          </Link>
      </div>
    </div>
  );
}

export default Sobre;
