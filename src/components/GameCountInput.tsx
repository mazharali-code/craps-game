import { useState, type FormEvent } from 'react'

export interface GameCountProps {
  runGames: (gameCount: number) => void
  disabled?: boolean
}

export function GameCountInput({ runGames, disabled = false }: GameCountProps) {
  const [gameCounter, setGameCounter] = useState('1000')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const gameCount = parseInt(gameCounter, 10)
    if (!Number.isNaN(gameCount)) {
      runGames(gameCount)
    }
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Run crap game simulation">
      <label htmlFor="games-count">Enter the number of games to simulate:</label>
    <input
        id="games-count"
        type="number"
        value={gameCounter}
        onChange={(e) => setGameCounter(e.target.value)}
        disabled={disabled}
        aria-describedby="games-count-hint"
        min={1}
        max={10_000_000}
      /> 
      <span id="games-count-hint">You can enter a number between 1 and 10,000,000</span>
      <button type="submit" disabled={disabled}>
        {disabled ? 'Running…' : 'Run simulation'}
      </button>
    </form>
  )
}