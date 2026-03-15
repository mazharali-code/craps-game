

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function createRandomRollProvider(): RollProvider {
  return function rollDice(): number {
    const die1 = randomInt(1, 6)
    const die2 = randomInt(1, 6)
    return die1 + die2
  }
}