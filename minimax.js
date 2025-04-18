function optimalMove() {
    let optimalScore = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') {
          board[i][j] = agent;
          let score = minimaxSearch(board, 0, false);
          board[i][j] = '';
          if (score > optimalScore) {
            optimalScore = score;
            move = { i, j };
          }
        }
      }
    }
    board[move.i][move.j] = agent;
    player = opponent;
  }
  
  let possibleScores = {
    X: 10,
    tie: 0, 
    O: -10
  };
  
  function minimaxSearch(board, searchDepth, isMaximizing) {
    let gameOutcome = getWinner();
    if (gameOutcome !== null) {
      return possibleScores[gameOutcome];
    }
  
    if (isMaximizing) {
      let optimalScore = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] == '') {
            board[i][j] = agent;
            let score = minimaxSearch(board, searchDepth + 1, false);
            board[i][j] = '';
            optimalScore = Math.max(score, optimalScore);
          }
        }
      }
      return optimalScore;
    } else {
      let optimalScore = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] == '') {
            board[i][j] = opponent;
            let score = minimaxSearch(board, searchDepth + 1, true);
            board[i][j] = '';
            optimalScore = Math.min(score, optimalScore);
          }
        }
      }
      return optimalScore;
    }
  }
  