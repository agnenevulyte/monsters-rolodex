import React from 'react';
import './card.css';

export default function Card({monster}) {
  console.log(monster);
  return (
    <div className="card">
      <img alt="monter" src={`https://robohash.org/${monster.id}set=set2`} />
      <h1>{monster.name}</h1>
      <p>monster.email</p>
    </div>
  );
}
