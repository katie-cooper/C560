// Simulates playing against an IMPERFECT opponent: opponent makes random move 
function randomOppMove() {
    let open = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') {
          open.push({ i, j });
        }
      }
    }
    if (open.length > 0) {
      let move = random(open);
      board[move.i][move.j] = opponent;
      player = agent;
    }
  }

  // Simulates playing against an OPTIMAL opponent: opponent uses minimax algorithm
  function optimalOppMove() {
    let optimalScore = Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') {
          board[i][j] = opponent;
          let score = minimaxSearch(board, 0, true, -Infinity, Infinity);
          board[i][j] = '';
          if (score < optimalScore) {
            optimalScore = score;
            move = { i, j };
          }
        }
      }
    }
    if (move) {
      board[move.i][move.j] = opponent;
      player = agent;
    }
  }
  
  // Simulates playing a game
  // Parameters: takes in boolean value for optimalOpponent
  function simulateRound(optimalOpponent) {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];

    player = agent;
  
    while (getWinner() === null) {
      if (player === agent) {
        optimalMove();
      } else {
        if (optimalOpponent) {
          optimalOppMove();
        } else {
          randomOppMove();
        }
      }
    }
  
    return getWinner();
  }

  // Simulates playing n games against an opponent
  // Parameters: 
    // n: number of games to simulate
    // optimalOpponent: boolean value for whether opponent is optimal
  function nSimulations(n, optimalOpponent) {
    let results = { X: 0, O: 0, tie: 0 };
  
    for (let i = 0; i < n; i++) {
      let result = simulateRound(optimalOpponent);
      results[result]++;
    }
  
    console.log(`Simulated ${n} games.`); 
    console.log(`Optimal opponent: ${optimalOpponent}`);
    console.log("KEY: X = agent wins, O = opponent wins"); 
    console.log(results);
  }  