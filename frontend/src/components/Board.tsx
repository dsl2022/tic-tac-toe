import { useGame, useActiveSession } from '../context/GameContext'
import './Board.css'

function Board() {
  const { dispatch } = useGame()
  const session = useActiveSession()

  if (!session) {
    return <div className="board-empty">Create or select a game to start.</div>
  }

  const { moves, status } = session
  const xSet = new Set(moves.X)
  const oSet = new Set(moves.O)

  const markFor = (cell: number): 'X' | 'O' | '' => {
    if (xSet.has(cell)) return 'X'
    if (oSet.has(cell)) return 'O'
    return ''
  }

  return (
    <div
      className="board"
      role="grid"
      aria-label="Tic-tac-toe board"
    >
      {Array.from({ length: 9 }).map((_, i) => {
        const mark = markFor(i)
        return (
          <button
            key={i}
            className={`cell ${mark ? `cell-${mark.toLowerCase()}` : ''}`}
            role="gridcell"
            onClick={() => dispatch({ type: 'MAKE_MOVE', cell: i })}
            disabled={mark !== '' || status !== 'playing'}
            aria-label={`Cell ${i + 1}${mark ? `, ${mark}` : ', empty'}`}
          >
            {mark}
          </button>
        )
      })}
    </div>
  )
}

export default Board
