import type { GameResult, SimulationStats } from '../types'

function mode(values: number[]): number {
  if (values.length === 0) return 0
  const counts = new Map<number, number>()
  for (const v of values) {
    counts.set(v, (counts.get(v) ?? 0) + 1)
  }
  let bestValue = values[0]
  let bestCount = 0
  for (const [value, count] of counts) {
    if (count > bestCount || (count === bestCount && value < bestValue)) {
      bestCount = count
      bestValue = value
    }
  }
  return bestValue
}

export function aggregateStats(results: GameResult[]): SimulationStats {
  const gamesPlayed = results.length
  if (gamesPlayed === 0) {
    return {
      gamesPlayed: 0,
      avgRollsPerGame: 0,
      maxRolls: 0,
      minRolls: 0,
      mostCommonRoll: 0,
      winRate: 0,
      wins: 0,
      losses: 0,
    }
  }

  const wins = results.filter((r) => r.win).length
  const losses = gamesPlayed - wins
  const rollCounts = results.map((r) => r.rollCount)
  const allRolls = results.flatMap((r) => r.rolls)
  const totalRolls = allRolls.length

  return {
    gamesPlayed,
    avgRollsPerGame: totalRolls / gamesPlayed,
    maxRolls: Math.max(...rollCounts),
    minRolls: Math.min(...rollCounts),
    mostCommonRoll: mode(allRolls),
    winRate: (wins / gamesPlayed) * 100,
    wins,
    losses,
  }
}
