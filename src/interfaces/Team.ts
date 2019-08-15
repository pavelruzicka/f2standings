import { countries } from "../util/countries"

interface IStats {
  podiums: number
  wins: number
  points: number
}

export interface ITeam {
  short: string
  name: string
  country: keyof typeof countries
  drivers: string[]
  results: [(number | null)[], (number | null)[]]
  poles: number
  fastest: number
}

export interface ITeamExpanded extends ITeam {
  stats: IStats
}
