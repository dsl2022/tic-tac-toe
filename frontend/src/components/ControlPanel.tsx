import { useGame, useActiveSession } from '../context/GameContext'
import './ControlPanel.css'

function ControlPanel() {
  const { dispatch } = useGame()
  const session = useActiveSession()

  return (
    <div className="control-panel">
      <button
        className="cp-button cp-primary"
        onClick={() => dispatch({ type: 'CREATE_SESSION' })}
      >
        New Game
      </button>

      {session && (
        <>
          <span className="cp-turn">
            Turn: <strong>{session.currentTurn}</strong>
          </span>
          <button
            className="cp-button"
            onClick={() => dispatch({ type: 'RESET_SESSION' })}
          >
            Reset
          </button>
          <button
            className="cp-button cp-danger"
            onClick={() =>
              dispatch({ type: 'DELETE_SESSION', id: session.id })
            }
          >
            Delete Game
          </button>
        </>
      )}
    </div>
  )
}

export default ControlPanel
