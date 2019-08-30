import { IDate } from "../interfaces/render/Race"

export const formatDate = ({
  date,
  short = false,
}: {
  date: IDate
  short?: boolean
}) => ({
  day: date.day,
  month: short ? date.month.substring(0, 3) : date.month,
})
