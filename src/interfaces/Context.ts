import { IDriverBase } from "./render/Driver"
import { ITeam } from "./render/Team"
import { IRace } from "./render/Race"

export interface IDriversContext {
  pageContext: {
    drivers: IDriverBase[]
    teams: ITeam[]
    races: IRace[]
    chart: boolean
  }
}

export interface IRacesContext {
  pageContext: {
    drivers: IDriverBase[]
    teams: ITeam[]
    races: IRace[]
  }
}

export interface ITeamsContext {
  pageContext: {
    teams: ITeam[]
    drivers: IDriverBase[]
    chart: boolean
  }
}
