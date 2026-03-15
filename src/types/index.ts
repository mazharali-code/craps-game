
export type RollProvider = () => number;

export interface SimulationStats {
  gamesPlayed: number;
  avgRollsPerGame: number;
  maxRolls: number;
  minRolls: number;
  mostCommonRoll: number;
  winRate: number;
  wins: number;
  losses: number;
}
