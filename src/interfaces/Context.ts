import { IDriverBase } from "./render/Driver"
import { ITeam } from "./render/Team"
import { IRace } from "./render/Race"

interface IPageContext {
  path: string
  pageContext: {
    drivers: IDriverBase[]
    teams: ITeam[]
    year: string
    availableYears: string[]
  }
}

export type IDriversContext = IPageContext & {
  pageContext: {
    races: IRace[]
    chart: boolean
  }
}

export type IRacesContext = IPageContext & {
  pageContext: {
    races: IRace[]
  }
}

export type ITeamsContext = IPageContext & {
  pageContext: {
    chart: boolean
  }
}
