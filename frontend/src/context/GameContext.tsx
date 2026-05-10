import { createContext, useContext, useEffect, useReducer } from 'react'
import type { Dispatch, ReactNode } from 'react'
import type { GameState, Session } from '../types'

const STORAGE_KEY = 'tic-tac-toe-state'

type Action =
  | { type: 'CREATE_SESSION' }
  | { type: 'SWITCH_SESSION'; id: string }
  | { type: 'MAKE_MOVE'; cell: number }
  | { type: 'RESET_SESSION' }
  | { type: 'DELETE_SESSION'; id: string }

const initialState: GameState = {
  sessions: {},
  activeSessionId: null,
}

function init(): GameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as GameState
  } catch {
    // ignore corrupt storage
  }
  return initialState
}

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    default:
      return state
  }
}

const GameContext = createContext<{
  state: GameState
  dispatch: Dispatch<Action>
} | null>(null)

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, init)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error('useGame must be used inside <GameProvider>')
  return ctx
}

export function useActiveSession(): Session | null {
  const { state } = useGame()
  return state.activeSessionId ? state.sessions[state.activeSessionId] : null
}
