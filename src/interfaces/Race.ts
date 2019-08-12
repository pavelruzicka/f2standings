interface IRaceBase {
  date: string
}

interface IRaceHappened extends IRaceBase {
  fastest?: string
  podium?: string[]
  winningTeam?: string
}

export interface IRacePartition extends IRaceHappened {
  pole?: string
  poleTime?: string
}

export interface IRaceWeekend {
  feature: IRacePartition
  sprint: IRacePartition
}

export interface IRace {
  short: string
  city: string
  country: string
  circuit: string
  races: IRaceWeekend
}
