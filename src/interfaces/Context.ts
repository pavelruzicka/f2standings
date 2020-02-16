import { IDriverBase } from "./render/Driver"
import { ITeam } from "./render/Team"
import { IRace } from "./render/Race"

export interface IDriversContext {
  pageContext: {
    drivers: IDriverBase[]
    teams: ITeam[]
    races: IRace[]
    chart: boolean
    year: string
    availableYears: string[]
  }
}

export interface IRacesContext {
  pageContext: {
    drivers: IDriverBase[]
    teams: ITeam[]
    races: IRace[]
    year: string
    availableYears: string[]
  }
}

export interface ITeamsContext {
  pageContext: {
    teams: ITeam[]
    drivers: IDriverBase[]
    chart: boolean
    year: string
    availableYears: string[]
  }
}
