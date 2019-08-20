import { IDate } from "../interfaces/Race"

export const formatDate = ({
  date,
  short = false,
}: {
  date: IDate
  short?: boolean
}) => `${date.day} ${short ? date.month.substring(0, 3) : date.month}`
