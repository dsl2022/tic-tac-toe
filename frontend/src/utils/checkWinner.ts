import type { Player } from '../types'

export const WINNING_PATTERNS: number[][] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
]

export function checkWinner(moves: number[]): boolean {
  const set = new Set(moves)
  return WINNING_PATTERNS.some(p => p.every(cell => set.has(cell)))
}

export function isDraw(xMoves: number[], oMoves: number[]): boolean {
  return xMoves.length + oMoves.length === 9
}

export function nextTurn(current: Player): Player {
  return current === 'X' ? 'O' : 'X'
}
