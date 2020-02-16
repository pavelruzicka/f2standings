import { IDriverBase } from "../interfaces/render/Driver"

export function getFinishedRaces(drivers: IDriverBase[]) {
  if (!drivers[0]) {
    return []
  }

  return drivers[0].results.filter(result => result.upcoming !== true)
}
