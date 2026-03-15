import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import type { SimulationStats } from '../types'
import { SimulationReport } from './Stats'

describe('SimulationReport', () => {
  it('shows empty state when no stats and not running', () => {
    render(<SimulationReport stats={null} pending={false} error={null} />)
    expect(screen.getByText(/enter the number of games/i)).toBeInTheDocument()
  })

  it('shows all 7 stats when stats provided', () => {
    const stats: SimulationStats = {
      gamesPlayed: 100,
      avgRollsPerGame: 3.45,
      maxRolls: 12,
      minRolls: 1,
      mostCommonRoll: 7,
      winRate: 49.5,
      wins: 49,
      losses: 51,
    }
    render(<SimulationReport stats={stats} pending={false} error={null} />)
    expect(screen.getByText('3.45')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
    expect(screen.getByText('49.50%')).toBeInTheDocument()
    expect(screen.getByText('49')).toBeInTheDocument()
    expect(screen.getByText('51')).toBeInTheDocument()
  })
})
