import React from "react"

import { IResult } from "../../interfaces/Driver"

interface IRaceResultProps {
  result: IResult
  upcoming: boolean
  type?: string
}

const RaceResult = ({ result, upcoming, type }: IRaceResultProps) => {
  return (
    <td
      style={{
        padding: `.3rem`,
        textAlign: `center`,
      }}
      colSpan={upcoming ? 2 : 1}
    >
      {upcoming ? "" : result[type!] ? `P${result[type!].position}` : "—"}
    </td>
  )
}

export default RaceResult
