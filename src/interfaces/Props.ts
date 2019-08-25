import { IDriverBase, IDriver, IResult } from "./render/Driver"
import { IRacePartition, IRace } from "./render/Race"
import { ITeam, ITeamExpanded } from "./render/Team"

import { RaceType } from "../enums/RaceType"

import { countries } from "../util/countries"
import { iconTypes } from "../util/icons"

export interface IProfileProps {
  driver: IDriver
  teams: ITeam[]
  races: IRace[]
  index: number
  open: number[]
}

export interface IContentProps {
  driver: IDriver
  team: ITeam
  index: number
}

export interface IDriverProps {
  driver: IDriver
  team: ITeam
  index: number
  expand: () => void
}

export interface IRaceHeaderProps {
  race: IResult
  index: number
}

export interface IRacePartititon {
  type: RaceType
  padded?: boolean
}

export interface IRaceResultProps {
  result: IResult
  type: RaceType
}

export interface IRacesRowProps {
  results: IResult[]
  driver: IDriverBase
}

export interface IPoleProps {
  feature: IRacePartition
  drivers: IDriverBase[]
  teams: ITeam[]
}

export interface ITeamProfileProps {
  team: ITeamExpanded
  teams: ITeam[]
  drivers: IDriverBase[]
  index: number
}

export interface IRaceRowProps {
  race: IRace
  index: number
  drivers: IDriverBase[]
  teams: ITeam[]
}

export interface IFlagProps {
  countryCode: keyof typeof countries
  desc?: string
  large?: boolean
  spaceless?: boolean
}

export interface IIconProps {
  type: keyof typeof iconTypes
  singular?: boolean
  size?: number
}

export interface ISEOProps {
  description?: string
  lang?: string
  title: string
}

export interface IHeaderProps {
  logo?: boolean
  subStyling?: boolean
  children: React.ReactNode
}
