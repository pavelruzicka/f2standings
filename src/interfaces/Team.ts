export interface ITeam {
  short: string
  name: string
  country: string
  drivers: string[]
  results: [(number | null)[], (number | null)[]]
}
