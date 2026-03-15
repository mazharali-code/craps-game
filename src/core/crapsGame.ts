import type { GameResult, RollProvider } from '../types'

const CRAPS_LOSE: readonly number[] = [2, 3, 12]
const NATURAL_WIN: readonly number[] = [7, 11]
const POINT_VALUES: readonly number[] = [4, 5, 6, 8, 9, 10]

function isCraps(sum: number): boolean {
  return CRAPS_LOSE.includes(sum)
}

function isNatural(sum: number): boolean {
  return NATURAL_WIN.includes(sum)
}

function isPoint(sum: number): boolean {
  return POINT_VALUES.includes(sum)
}

export function runCrapsGame(roller: RollProvider): GameResult {
  const rolls: number[] = []
  const first = roller()
  rolls.push(first)

  if (isCraps(first)) {
    return { win: false, rolls, rollCount: rolls.length }
  }
  if (isNatural(first)) {
    return { win: true, rolls, rollCount: rolls.length }
  }
  if (isPoint(first)) {
    const point = first
    for (;;) {
      const next = roller()
      rolls.push(next)
      if (next === point) {
        return { win: true, rolls, rollCount: rolls.length }
      }
      if (next === 7) {
        return { win: false, rolls, rollCount: rolls.length }
      }
    }
  }

  return { win: false, rolls, rollCount: rolls.length }
}
