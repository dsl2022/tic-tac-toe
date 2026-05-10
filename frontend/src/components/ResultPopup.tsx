import { useEffect, useState } from 'react'
import { useGame, useActiveSession } from '../context/GameContext'
import './ResultPopup.css'

function ResultPopup() {
  const { dispatch } = useGame()
  const session = useActiveSession()
  const [dismissedIds, setDismissedIds] = useState<string[]>([])

  // when a game returns to 'playing', clear its dismissal so a fresh
  // win/draw will show the popup again
  useEffect(() => {
    if (session?.status === 'playing') {
      setDismissedIds(prev => prev.filter(id => id !== session.id))
    }
  }, [session?.status, session?.id])

  if (!session || session.status === 'playing') return null
  if (dismissedIds.includes(session.id)) return null

  const isWin = session.status === 'won'
  const winner = session.winner

  const close = () => setDismissedIds(prev => [...prev, session.id])

  return (
    <div
      className="result-backdrop"
      role="dialog"
      aria-modal="true"
      onClick={close}
    >
      <div className="result-card" onClick={e => e.stopPropagation()}>
        {isWin ? (
          <h2 className="result-title">
            <span className={`cell-${winner?.toLowerCase()}`}>{winner}</span>{' '}
            wins!
          </h2>
        ) : (
          <h2 className="result-title">It's a draw</h2>
        )}

        <div className="result-actions">
          <button className="result-button-secondary" onClick={close}>
            Close
          </button>
          <button
            className="result-button"
            onClick={() => dispatch({ type: 'RESET_SESSION' })}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultPopup
