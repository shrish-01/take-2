import './App.css'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'

function App() {

  return (
    <div style={{width: '30%'}}>
      <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
        <LeftPanel />
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <RightPanel />
      </div>
    </div>
  )
}

export default App
