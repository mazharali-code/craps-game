import './App.css'
import { HowToPlay } from './components/HowToPlay'
import { GameCountInput } from './components/GameCountInput'
import { SimulationReport } from './components/Stats'
import { useSimulation } from './hooks/useSimulation'

function App() {
  const { run, stats, isRunning, error } = useSimulation()

  return (
    <div className="game-container">
      <h1>Craps Simulator</h1>
      <div className="game-container-inner">
        <div className="game-container-inner-left">
          <HowToPlay />
          <GameCountInput runGames={run} disabled={isRunning} />
        </div>
        <SimulationReport stats={stats} pending={isRunning} error={error} />
      </div>
    </div>
  )
}

export default App
