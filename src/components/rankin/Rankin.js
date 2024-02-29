import React, { useState } from 'react';
import './Rankin.css'; 

const Ranking = () => {
  const [players, setPlayers] = useState([
    {
      name: 'PLAYER 1',
      score: 3241,
    },
    {
      name: 'PLAYER 2',
      score: 2451,
    },
    {
      name: 'PLAYER 3',
      score: 1547,
    },
    {
      name: 'PLAYER 4',
      score: 980,
    },
  ]);

  return (
    <div className='bg container-fluid'>
      <div className="ranking mt-2">
        <div className="header-ranking">
          <h1>RANKING</h1>
        </div>
        <div className="body">
          {players.map((player, index) => (
            <div className="player" key={index}>
              <div className="position">
                <div className="circle">{index + 1}</div>
              </div>
              <div className="name">{player.name}</div>
              <div className="score">{player.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ranking;
