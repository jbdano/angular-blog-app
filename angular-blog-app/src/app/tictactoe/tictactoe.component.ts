import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tictactoe',
  imports: [CommonModule],
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.css'
})
export class TictactoeComponent {

  board: string[] = Array(9).fill('');
  currentPlayer: string = '';
  winner: string = '';
  gameOver: boolean = false;

  constructor() {
    this.newGame();
  }

  newGame() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = '';
    this.gameOver = false;
  }

  makeMove(index: number) {
    if (!this.board[index] && !this.gameOver) {
      this.board.splice(index, 1, this.currentPlayer);
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
    this.winner = this.calculateWinner();
    if (this.winner) {
      this.gameOver = true;
    }
  }

  calculateWinner() {

    var winner = '';

    var rows = [
      // horizontal
      [0,1,2],
      [3,4,5],
      [6,7,8],
      // vertical
      [0,3,6],
      [1,4,7],
      [2,5,8],
      // diagonal
      [0,4,8],
      [2,4,6],
    ];

    rows.every((row) => {
      winner = this.calculateRowWinner(row);
      return !winner;
    });

    return winner;
  }

  calculateRowWinner(boxes: number[]) {

    if (boxes.length === 3 && this.board[boxes[0]] === this.board[boxes[1]] && this.board[boxes[0]] === this.board[boxes[2]]) {
      return this.board[boxes[0]];
    }
    return '';
  }

}
