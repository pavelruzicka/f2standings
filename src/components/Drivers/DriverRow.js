import React from "react"

const DriverRow = ({ driver, team }) => {
  const { country, name, lastName } = driver

  return (
    <tr>
      <th
        scope="row"
        style={{ borderLeft: `1px solid #dee2e6`, padding: `.75rem` }}
      >
        #0
      </th>
      <td>
        <img
          src={`/flags/${country}.svg`}
          style={{
            width: 25,
            margin: `0 .35rem 0 0`,
            position: `relative`,
            bottom: `3px`,
          }}
        />{" "}
        {name} <strong>{lastName}</strong>
      </td>
      <td>
        <img
          src={`/flags/${team.country}.svg`}
          style={{
            width: 25,
            margin: `0 .35rem 0 0`,
            position: `relative`,
            bottom: `3px`,
          }}
        />{" "}
        {team.name}
      </td>
      <td>0</td>
      <td>0</td>
      <td style={{ borderRight: `1px solid #dee2e6` }}>0</td>
    </tr>
  )
}

export default DriverRow
