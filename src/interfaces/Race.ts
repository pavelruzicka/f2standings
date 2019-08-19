import { countries } from "../util/countries"

export interface IDate {
  day: number
  month: string
}
interface IRaceBase {
  date: IDate
}

interface IRaceHappened extends IRaceBase {
  fastest?: string
  podium: string[]
}

export interface IRacePartition extends IRaceHappened {
  pole?: string
  poleTime?: string
}

interface IRaceWeekend {
  feature: IRacePartition
  sprint: IRacePartition
}

export interface IRaceDatesProps extends IRaceWeekend {
  mobile: boolean
}

export interface IRace {
  short: keyof typeof countries
  city: string
  country: string
  circuit: string
  races: IRaceWeekend
}
