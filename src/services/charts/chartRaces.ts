import { IDriverBase } from "../../interfaces/render/Driver"

export function getChartRaces(drivers: IDriverBase[]) {
  return drivers[0].results
    .filter(result => result.upcoming !== true)
    .map(race => race.location)
}
