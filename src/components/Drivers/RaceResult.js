import React from "react"

const RaceResult = ({ race, upcoming, type }) => {
  return (
    <td
      style={{
        border: `1px solid #dee2e6`,
        padding: `.3rem`,
        textAlign: `center`,
      }}
      colSpan={upcoming ? 2 : null}
    >
      {upcoming ? "" : race[type] ? `P${race[type].position}` : "—"}
    </td>
  )
}

export default RaceResult
