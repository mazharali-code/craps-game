import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { GameCountInput } from './GameCountInput'

describe('GameCountInput', () => {
  it('calls onRun with parsed number on submit', () => {
    const onRun = vi.fn()
    render(<GameCountInput runGames={onRun} />)
    const input = screen.getByLabelText(/number of games/i)
    fireEvent.change(input, { target: { value: '500' } })
    fireEvent.submit(screen.getByRole('form'))
    expect(onRun).toHaveBeenCalledWith(500)
  })
})
