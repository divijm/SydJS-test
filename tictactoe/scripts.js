var player1 = 'George';
var player2 = 'Fred';

var turnCounter;

var board = [
  ['_', '_', '_'],
  ['_', '_', '_'],
  ['_', '_', '_'],
];

console.log(board[0][0]);

var takeTurn = function(player, row, column) {
  board[row][column] = player;

  console.log(board)
};

var addOne = function(number) {
  return number + 1
}

var newNum = addOne(3);

var getWinner = function() {
  <!-- First Row -->
  if (board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0] !== '_') {
    return true;
  <!-- Second Row -->
  } else if (board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][0] !== '_') {
    return true;
  <!-- Third Row -->
  } else if (board[2][0] === board[2][1]) && board[2][0] === board[2][2] && board[2][0] !== '_' {
		return true;
  <!-- First Column -->
  } else if (board[0][0] === board[1][0]) && board[0][0] === board[2][0] && board[0][0] !== '_' {
		return true;
  <!-- Second Column -->
  } else if (board[0][1] === board[1][1]) && board[0][1] === board[2][1] && board[0][1] !== '_' {
		return true;
  <!-- Third Column -->
  } else if (board[0][2] === board[1][2]) && board[0][2] === board[2][2] && board[0][2] !== '_' {
		return true;
  <!-- Diagonal 1 -->
  } else if (board[0][0] === board[1][1]) && board[0][0] === board[2][2] && board[0][0] !== '_' {
		return true;
  <!-- Diagonal 2 -->
  } else if (board[0][2] === board[1][1]) && board[0][2] === board[2][0] && board[0][0] !== '_' {
		return true;
  } else {
    return false;
  }
}

// Extension problems:

var resetBoard = function(rows) {

}

var randomNum = function() {
  var number = Math.ceil(Math.random() * 3);
  return number
}

var randomTurn = function(player) {
  takeTurn(player, randomNum(), randomNum())
}

// Things that you can learn writing this:
//
// What are arrays, functions, booleans, comparing 'truthiness', variables,
// returning things from functions
//
// What I need to do to make this more useful:
//  - Easy ways to run individual functions for testing purposes
//  - more logging going around
//  - Possibly more complexity?


















$(document).ready(function() {
  var currentTurn = player1
  var otherTurn = player2
  var column = function(square) {
    if ($(square).attr('class').indexOf("d") >= 0) {
      return 0;
    }
    if ($(square).attr('class').indexOf("b") >= 0) {
      return 1;
    }
    if ($(square).attr('class').indexOf("c") >= 0) {
      return 2;
    }
  }

  var row = function(square) {
    if ($(square).attr('class').indexOf("1") >= 0) {
      return 0;
    }
    if ($(square).attr('class').indexOf("2") >= 0) {
      return 1;
    }
    if ($(square).attr('class').indexOf("3") >= 0) {
      return 2;
    }
  }

  $(".square").click(function() {
    if ($(this).children("p").text() === "") {
      $(this).children("p").text(currentTurn);
      //The below tracks the info to the JS board
      var theRow = row(this);
      var theColumn = column(this);
      takeTurn(currentTurn, theRow, theColumn)
        //Check the winner
      if (getWinner(currentTurn)) {
        $("body").append('<div class="game-over"><p>' + currentTurn + ' won the game.</p><p>Would you like to <a>play again?</a></p></div>')
        $("#grid").css({
          display: "none"
        });
      }

      if (turnCounter === 9) {
        console.log('turn counter', turnCounter)
        $("body").append("<div class='game-over'><p>It's a draw!</p><p>Would you like to <a>play again?</a></p></div>")
        $("#grid").css({
          display: "none"
        });
      }
      //This switches who's turn it is.
      var saveString = currentTurn;
      currentTurn = otherTurn;
      otherTurn = saveString;
    }
  })
})
