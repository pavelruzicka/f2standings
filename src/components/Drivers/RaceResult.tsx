import React from "react"

import { IResult } from "../../interfaces/Driver"

interface IRaceResultProps {
  result: IResult
  upcoming: boolean
  type?: string
}

const RaceResult = ({ result, upcoming, type }: IRaceResultProps) => {
  return (
    <div
      style={{
        flexBasis: `50%`,
        opacity: result[type!] ? 1 : 0.4,
        padding: `.3rem 0`,
        textAlign: `center`,
      }}
    >
      {upcoming ? "" : result[type!] ? `P${result[type!].position}` : "—"}
    </div>
  )
}

export default RaceResult
