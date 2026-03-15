
export type RollProvider = () => number;

export interface GameResult {
  win: boolean;
  rolls: number[];
  rollCount: number;
}

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
