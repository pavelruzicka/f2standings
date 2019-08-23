import { IDriverBase } from "../interfaces/render/Driver"

export function getFinishedRaces(drivers: IDriverBase[]) {
  return drivers[0].results.filter(result => result.upcoming !== true)
}
