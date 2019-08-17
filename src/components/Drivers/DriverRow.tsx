import React from "react"

import RookieStatus from "./RookieStatus"
import { Flag } from "../Flag"

import { IDriver } from "../../interfaces/Driver"
import { ITeam } from "../../interfaces/Team"

import { MobileLabel, MobileText } from "../../styles/Mobile"

import {
  RowInit,
  RowBlock,
  RowStart,
  RowEnd,
  RowWrapper,
  RowInitMobile,
  Team,
} from "../../styles/TableRow"

type ExpandFunc = () => void

interface IContentProps {
  driver: IDriver
  team: ITeam
  index: number
}

interface IDriverProps extends IContentProps {
  expand: ExpandFunc
}

const RowContent = ({ driver, team, index }: IContentProps) => {
  const { country, name, lastName, stats } = driver

  return (
    <>
      <RowStart>
        <MobileLabel>Driver</MobileLabel>
        <MobileText>
          <Flag countryCode={country} large={true} /> {`${name} `}
          <strong>{lastName}</strong>
          {driver.rookie ? <RookieStatus /> : null}
        </MobileText>
      </RowStart>

      <Team>
        <MobileLabel>Team</MobileLabel>
        <MobileText>
          <Flag countryCode={team.country} large={true} /> {team.name}
        </MobileText>
      </Team>

      <RowInitMobile>
        <MobileLabel>Championship position</MobileLabel>
        <MobileText>#{index + 1}</MobileText>
      </RowInitMobile>

      <RowBlock>
        <MobileLabel>Pole positions</MobileLabel>
        <MobileText>{stats.poles}</MobileText>
      </RowBlock>

      <RowBlock>
        <MobileLabel>Fastest laps</MobileLabel>
        <MobileText>{stats.fastest}</MobileText>
      </RowBlock>

      <RowEnd>
        <MobileLabel>Points</MobileLabel>
        <MobileText>{stats.points}</MobileText>
      </RowEnd>
    </>
  )
}

const DriverRow = ({ driver, team, index, expand }: IDriverProps) => {
  return (
    <RowWrapper onClick={() => expand()}>
      <RowInit>#{index + 1}</RowInit>

      <RowContent driver={driver} team={team} index={index} />
    </RowWrapper>
  )
}

export default DriverRow
