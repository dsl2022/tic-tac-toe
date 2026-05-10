import { useGame } from '../context/GameContext'

function Sidebar() {
  const { state, dispatch } = useGame()
  const sessions = Object.values(state.sessions).sort(
    (a, b) => a.createdAt - b.createdAt,
  )

  return (
    <aside>
      <h3>Games</h3>
      {sessions.length === 0 ? (
        <p>No games yet</p>
      ) : (
        <>
          <ul>
            {sessions.map(s => (
              <li key={s.id}>
                <button
                  onClick={() =>
                    dispatch({ type: 'SWITCH_SESSION', id: s.id })
                  }
                >
                  {s.name} {s.id === state.activeSessionId ? '(active)' : ''}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => dispatch({ type: 'CLEAR_ALL' })}>
            Clear All
          </button>
        </>
      )}
    </aside>
  )
}

export default Sidebar
