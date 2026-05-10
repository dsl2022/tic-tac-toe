import Sidebar from './Sidebar'
import Board from './Board'
import ControlPanel from './ControlPanel'
import ResultPopup from './ResultPopup'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <ControlPanel />
        <Board />
      </main>
      <ResultPopup />
    </div>
  )
}

export default Layout
