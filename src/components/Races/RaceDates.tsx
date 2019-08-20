import React from "react"

import { IRaceWeekend } from "../../interfaces/Race"

import { formatDate } from "../../services/formatDate"

const RaceDates = ({ feature, sprint }: IRaceWeekend) => {
  const featureDate = formatDate({ date: feature.date })
  const sprintDate = formatDate({ date: sprint.date })

  return (
    <td>
      <div>{featureDate}</div>
      <div>{sprintDate}</div>
    </td>
  )
}

export default RaceDates
