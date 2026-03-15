import { describe, it, expect } from 'vitest'
import { createRandomRollProvider } from './index'

describe('createRandomRollProvider', () => {
  it('returns a function', () => {
    const roller = createRandomRollProvider()
    expect(typeof roller).toBe('function')
  })

  it('returns a number in 2-12 for many calls', () => {
    const roller = createRandomRollProvider()
    for (let i = 0; i < 200; i++) {
      const sum = roller()
      expect(sum).toBeGreaterThanOrEqual(2)
      expect(sum).toBeLessThanOrEqual(12)
    }
  })
})
