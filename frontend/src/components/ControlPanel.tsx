import { useGame, useActiveSession } from '../context/GameContext'

function ControlPanel() {
  const { dispatch } = useGame()
  const session = useActiveSession()

  return (
    <div className="control-panel">
      <button onClick={() => dispatch({ type: 'CREATE_SESSION' })}>
        New Game
      </button>

      {session && (
        <>
          <span>Turn: {session.currentTurn}</span>
          <button onClick={() => dispatch({ type: 'RESET_SESSION' })}>
            Reset
          </button>
          <button
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
