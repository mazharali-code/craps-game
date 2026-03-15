import './App.css'
import { HowToPlay } from './components/HowToPlay'
import { GameCountInput } from './components/GameCountInput'
import { SimulationReport } from './components/Stats'
import { useSimulation } from './hooks/useSimulation'

function App() {
  const { run, stats, pending, error } = useSimulation()

  return (
    <>
      <h1>Craps Simulator</h1>
      <HowToPlay />
      <GameCountInput runGames={run} disabled={pending} />
      <SimulationReport stats={stats} pending={pending} error={error} />
    </>
  )
}

export default App
