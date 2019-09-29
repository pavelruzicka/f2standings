import { countries } from "../../util/countries"

interface IFeatureRaceReport {
  pole: boolean
  position: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | null
  fastest: boolean
}

interface ISprintRaceReport {
  position: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | null
  fastest: boolean
}

interface IStats {
  poles: number
  fastest: number
  points: number
}

export interface IResult {
  location: keyof typeof countries
  upcoming?: boolean
  feature: IFeatureRaceReport | null
  sprint: ISprintRaceReport | null
}

export interface IDriverBase {
  short: string
  name: string
  lastName: string
  country: keyof typeof countries
  team: string
  rookie?: boolean
  results: IResult[]
}

export interface IDriver extends IDriverBase {
  stats: IStats
}
