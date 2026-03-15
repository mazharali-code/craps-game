import type { GameResult, RollProvider, SimulationStats } from '../types'
import { createRandomRollProvider } from './dice'
import { runCrapsGame } from './crapsGame'
import { aggregateStats } from './statsAggregator'

export function runSimulation(
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
