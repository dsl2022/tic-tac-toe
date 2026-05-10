import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import Board from './components/Board'
import ControlPanel from './components/ControlPanel'
import ResultPopup from './components/ResultPopup'
import './App.css'

function App() {
  return (
    <Layout>
      <Sidebar />
      <Board />
      <ControlPanel />
      <ResultPopup />
    </Layout>
  )
}

export default App
