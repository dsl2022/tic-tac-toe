export type Player = 'X' | 'O'

export type GameStatus = 'playing' | 'won' | 'draw'

export type Session = {
  id: string
  name: string
  moves: { X: number[]; O: number[] }
  currentTurn: Player
  status: GameStatus
  winner: Player | null
  createdAt: number
}

export type GameState = {
  sessions: Record<string, Session>
  activeSessionId: string | null
}
