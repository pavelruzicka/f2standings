import React from "react"

import { Flag } from "../Flag"

import { IDriver } from "../../interfaces/Driver"
import { ITeam } from "../../interfaces/Team"

import { RowInit, RowBlock, RowWrapper } from "../../styles/TableRow"

type ExpandFunc = () => void

interface IDriverProps {
  driver: IDriver
  team: ITeam
  index: number
  expand: ExpandFunc
}

const DriverRow = ({ driver, team, index, expand }: IDriverProps) => {
  const { country, name, lastName, stats } = driver

  return (
    <RowWrapper onClick={() => expand()}>
      <RowInit>#{index + 1}</RowInit>

      <td>
        <Flag countryCode={country} large={true} /> {`${name} `}
        <strong>{lastName}</strong>
      </td>

      <td>
        <Flag countryCode={team.country} large={true} /> {team.name}
      </td>

      <RowBlock>{stats.poles}</RowBlock>
      <RowBlock>{stats.fastest}</RowBlock>
      <RowBlock>{stats.points}</RowBlock>
    </RowWrapper>
  )
}

export default DriverRow
