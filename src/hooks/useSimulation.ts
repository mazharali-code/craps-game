import { useState, useCallback } from 'react'
import type { GameResult, RollProvider, SimulationStats } from '../types'
import { runCrapsGame } from '../core/crapsGame'
import { aggregateStats } from '../core/statsAggregator'
import { createRandomRollProvider } from '../core/dice'


export interface UseSimulationReturn {
  run: (gameCount: number) => void
  stats: SimulationStats | null
  isRunning: boolean
  error: string | null
}

function runSimulation(
  gameCount: number,
  roller?: RollProvider
): SimulationStats {
  const rollProvider = roller ?? createRandomRollProvider()
  const results: GameResult[] = []
  for (let i = 0; i < gameCount; i++) {
    results.push(runCrapsGame(rollProvider))
  }
  return aggregateStats(results)
}

export function useSimulation(): UseSimulationReturn {
  const [stats, setStats] = useState<SimulationStats | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const run = useCallback((gameCount: number) => {
  const n = Math.floor(Number(gameCount))
    if (!Number.isFinite(n) || n < 1) {
      setError('Please enter a valid number of games (at least 1).')
      return
    }
    if (n > 10_000_000) {
      setError('Maximum 10,000,000 games to avoid freezing.')
      return
    }
    setError(null)
    setIsRunning(true)
    setStats(null)
    setTimeout(() => {
      try {
        const result = runSimulation(n)
        setStats(result)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Simulation failed.')
      } finally {
        setIsRunning(false)
      }
    }, 0)
  }, [])
  return { run, stats, isRunning, error }
}
