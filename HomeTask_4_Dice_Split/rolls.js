function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function playGame() {
    let player1Score = 0;
    let player2Score = 0;
  
    for (let i = 0; i < 3; i++) {
      const player1Roll = rollDie();
      const player2Roll = rollDie();
      player1Score += player1Roll;
      player2Score += player2Roll;
    }
  
    if (player1Score > player2Score) {
      return "Игрок 1 победил!";
    } else if (player2Score > player1Score) {
      return "Игрок 2 победил!";
    } else {
      return "Ничья!";
    }
  }
  
  const result = playGame();
  console.log(result);