import React from "react"

import { Flag } from "../Flag"

import { IDriver } from "../../interfaces/Driver"
import { ITeam } from "../../interfaces/Team"

type ExpandFunc = () => void

interface IDriverProps {
  driver: IDriver
  team: ITeam
  index: number
  onClick: ExpandFunc
}

const DriverRow = ({ driver, team, index, onClick }: IDriverProps) => {
  const { country, name, lastName, stats } = driver

  return (
    <tr onClick={() => onClick()}>
      <th scope="row" style={{ textAlign: `right`, color: `black` }}>
        #{index + 1}
      </th>
      <td>
        <Flag countryCode={country} large={true} /> {name}{" "}
        <strong>{lastName}</strong>
      </td>
      <td>
        <Flag countryCode={team.country} large={true} /> {team.name}
      </td>
      <td style={{ textAlign: `center` }}>{stats.poles}</td>
      <td style={{ textAlign: `center` }}>{stats.fastest}</td>
      <td
        style={{
          textAlign: `center`,
        }}
      >
        {stats.points}
      </td>
    </tr>
  )
}

export default DriverRow
