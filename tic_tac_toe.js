let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  let w; 
  let h; 

  let agent = 'X';
  let opponent = 'O';
  let player = opponent;
  
  function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('canvas-holder');
    w = width / 3;
    h = height / 3;
    optimalMove();
  }
  
  function threeInRow(a, b, c) {
    return a == b && b == c && a != '';
  }
  
  function getWinner() {
    let gameWinner = null;

    // check for wins diagnoally, horizontally, and vertically 
    if (threeInRow(board[0][0], board[1][1], board[2][2])) {
      gameWinner = board[0][0];
    }
    if (threeInRow(board[2][0], board[1][1], board[0][2])) {
      gameWinner = board[2][0];
    }
    for (let i = 0; i < 3; i++) {
      if (threeInRow(board[i][0], board[i][1], board[i][2])) {
        gameWinner = board[i][0];
      }
    }
    for (let i = 0; i < 3; i++) {
      if (threeInRow(board[0][i], board[1][i], board[2][i])) {
        gameWinner = board[0][i];
      }
    }
  
    // count blank spaces to see if there are moves left to be made 
    let blanks = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') {
          blanks++;
        }
      }
    }
  
    if (gameWinner == null && blanks == 0) {
      return 'tie';
    } else {
      return gameWinner;
    }
  }
  
  function mousePressed() {
    if (player == opponent) {
      let i = floor(mouseX / w);
      let j = floor(mouseY / h);
      if (board[i][j] == '') {
        board[i][j] = opponent;
        player = agent;
        optimalMove();
      }
    }
  }
  
  function draw() {
    
    strokeWeight(4);
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);
  
    for (let j = 0; j < 3; j++) {
      for (let i = 0; i < 3; i++) {
        let x = w * i + w / 2;
        let y = h * j + h / 2;
        let spot = board[i][j];
        textSize(32);
        let r = w / 4;
        if (spot == opponent) {
          noFill();
          ellipse(x, y, r * 2);
        } else if (spot == agent) {
          line(x - r, y - r, x + r, y + r);
          line(x + r, y - r, x - r, y + r);
        }
      }
    }
  
    let gameResult= getWinner();

    if (gameResult!= null) {
      noLoop();
      let resultDisplay = select('#result-text');
      resultDisplay.style('font-size', '32pt');
      if (gameResult== 'tie') {
        resultDisplay.html('It\'s a Tie!');
      } else {
        resultDisplay.html(`${result} wins!`);
      }
    }
  }
  