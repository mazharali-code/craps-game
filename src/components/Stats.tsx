import type { SimulationStats } from '../types'
import './Stats.css'

export interface SimulationStatsProps {
  pending: boolean
  stats: SimulationStats | null
  error: string | null
}

export function SimulationReport({ pending, stats,  error }: SimulationStatsProps) {

  if (pending) {
    return (
      <section className="simulation-report" aria-live="polite">
        <p className="placeholder">Running simulation…</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="simulation-report" aria-live="polite" role="alert">
        <p className="error">{error}</p>
      </section>
    )
  }

  if (!stats || stats.gamesPlayed === 0) {
    return (
      <section className="simulation-report" aria-live="polite">
        <p className="placeholder">Enter the number of games and click &quot;Run simulation&quot; to see results.</p>
      </section>
    )
  }

  return (
    <section className="simulation-report" aria-live="polite" aria-label="Simulation statistics">
      <h2>Simulation statistics</h2>
      <dl>
            <dt>Average rolls per game</dt>
            <dd>{stats.avgRollsPerGame.toFixed(2)}</dd>
            <dt>Highest number of rolls</dt>
            <dd>{stats.maxRolls}</dd>
            <dt>Lowest number of rolls</dt>
            <dd>{stats.minRolls}</dd>
            <dt>Most common roll</dt>
            <dd>{stats.mostCommonRoll}</dd>
            <dt>Average winning percentage</dt>
            <dd>{stats.winRate.toFixed(2)}%</dd>
            <dt>Number of wins</dt>
            <dd>{stats.wins}</dd>
        <dt>Number of losses</dt>
        <dd>{stats.losses}</dd>
      </dl>
    </section>
  )
}