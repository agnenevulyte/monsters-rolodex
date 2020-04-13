import React from 'react';
import './cardList.css';
import Card from '../card/Card';

export default function CardList({monsters}) {
  return (
    <div className="card-list">
      {monsters.map((eachMonster) => (
        <Card key={eachMonster.id} monster={eachMonster} />
        // <h1 key={eachMonster.id}>{eachMonster.name}</h1>
      ))}
    </div>
  );
}
