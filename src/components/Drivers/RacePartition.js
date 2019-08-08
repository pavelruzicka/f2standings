import React from "react"

const RacePartition = ({ type }) => {
  return (
    <td
      style={{
        border: `1px solid #dee2e6`,
        padding: `.3rem`,
        width: `${100 / 24}%`,
        textAlign: `center`,
      }}
    >
      <small>
        {type === "feature" ? (
          <abbr title="Feature Race">FR</abbr>
        ) : (
          <abbr title="Sprint Race">SR</abbr>
        )}
      </small>
    </td>
  )
}

export default RacePartition
