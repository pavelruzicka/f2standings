import React from "react"

import Flag from "../Flag"

const DriverRow = ({ driver, team, onClick }) => {
  const { country, name, lastName } = driver

  return (
    <tr onClick={() => onClick()}>
      <th
        scope="row"
        style={{ borderLeft: `1px solid #dee2e6`, padding: `.75rem` }}
      >
        #0
      </th>
      <td>
        <Flag countryCode={country} large={true} /> {name}{" "}
        <strong>{lastName}</strong>
      </td>
      <td>
        <Flag countryCode={team.country} large={true} /> {team.name}
      </td>
      <td>0</td>
      <td>0</td>
      <td style={{ borderRight: `1px solid #dee2e6` }}>0</td>
    </tr>
  )
}

export default DriverRow
