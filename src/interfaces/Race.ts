interface IRacePartition {
  date: string
  pole?: string
  fastest?: string
  winningDriver?: string
  winningTeam?: string
}

interface IRaceWeekend {
  feature: IRacePartition
  sprint: IRacePartition
}

export interface IRace {
  short: string
  country: string
  circuit: string
  races: IRaceWeekend
}
