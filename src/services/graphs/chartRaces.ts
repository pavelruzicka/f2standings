import { IDriverBase } from "../../interfaces/Driver"

export function getChartRaces(drivers: IDriverBase[]) {
  return drivers[0].results
    .filter(result => result.upcoming !== true)
    .map(race => race.location)
}
