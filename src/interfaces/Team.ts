interface IStats {
  podiums: number
  wins: number
  points: number
}

export interface ITeam {
  short: string
  name: string
  country: string
  drivers: string[]
  results: [(number | null)[], (number | null)[]]
  poles: number
  fastest: number
}

export interface ITeamExpanded extends ITeam {
  stats: IStats
}
