import React from 'react';

const Instructions = () => {
  return (
    <div className="row justify-content-center">
      <div className="col col-7">
        <strong>Instructions:</strong>
        <p>Press arrow keys (← → ↑) to move left, right and jump</p>
        <p>Eat the cupcakes to increase score</p>
        <p>Tiles collapse when it hit bridge</p>
        <p>Game over when catcher falls off the bridge or eats a fruit</p>
      </div>
    </div>
  )
};

export default Instructions;