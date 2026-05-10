import { useGame } from '../context/GameContext'
import './Sidebar.css'

function Sidebar() {
  const { state, dispatch } = useGame()
  const sessions = Object.values(state.sessions).sort(
    (a, b) => a.createdAt - b.createdAt,
  )

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Games</h3>
      {sessions.length === 0 ? (
        <p className="sidebar-empty">No games yet</p>
      ) : (
        <>
          <ul className="sidebar-list">
            {sessions.map(s => {
              const isActive = s.id === state.activeSessionId
              return (
                <li key={s.id}>
                  <button
                    className={`sidebar-item ${isActive ? 'is-active' : ''}`}
                    onClick={() =>
                      dispatch({ type: 'SWITCH_SESSION', id: s.id })
                    }
                  >
                    {s.name}
                  </button>
                </li>
              )
            })}
          </ul>
          <button
            className="sidebar-clear"
            onClick={() => dispatch({ type: 'CLEAR_ALL' })}
          >
            Clear All
          </button>
        </>
      )}
    </aside>
  )
}

export default Sidebar
