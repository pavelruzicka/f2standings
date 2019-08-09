interface IFeatureRaceReport {
  pole: boolean
  position: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  fastest: boolean
}

interface ISprintRaceReport {
  position: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  fastest: boolean
}

interface IStats {
  poles: number
  fastest: number
  points: number
}

export interface IResult {
  location: string
  upcoming?: boolean
  feature: IFeatureRaceReport | null
  sprint: ISprintRaceReport | null
  [type: string]: any
}

export interface IDriverBase {
  short: string
  name: string
  lastName: string
  country: string
  team: string
  results: IResult[]
}

export interface IDriver extends IDriverBase {
  stats: IStats
}
