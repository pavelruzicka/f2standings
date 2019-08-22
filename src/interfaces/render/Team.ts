import { countries } from "../../util/countries"

interface IStats {
  podiums: number
  wins: number
  points: number
}

export interface ITeamResult {
  position: number | null
  pole: boolean
  fastest: boolean
}

export interface ITeam {
  short: string
  name: string
  country: keyof typeof countries
  drivers: string[]
  results: [ITeamResult[], ITeamResult[]]
  poles: number
  fastest: number
}

export interface ITeamExpanded extends ITeam {
  stats: IStats
}
