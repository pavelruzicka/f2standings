import React from "react"

import { IRaceWeekend } from "../../interfaces/Race"

const RaceDates = ({ feature, sprint }: IRaceWeekend) => {
  return (
    <td>
      <div>{feature.date}</div>
      <div>{sprint.date}</div>
    </td>
  )
}

export default RaceDates
