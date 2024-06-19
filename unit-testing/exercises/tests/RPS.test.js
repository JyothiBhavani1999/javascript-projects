const rps = require('../RPS.js');

describe('RPS tests', function(){
test("returns 'TIE!' if both players choose the same option", function() {
let output = rps.whoWon('paper', 'paper');
expect(output).toBe('TIE!');
      });

test("returns 'Player 1 wins!' if P1 = paper & P2 = rock", function() {
let output = rps.whoWon('paper', 'rock');
expect(output).toBe("Player 1 wins!");
      });
    
test("returns 'Player 1 wins!' if P1 = scissors & P2 = paper", function() {
let output = rps.whoWon('scissors', 'paper');
expect(output).toBe("Player 1 wins!");
      });
});