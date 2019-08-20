import React from "react"

import { RookieStatus } from "./RookieStatus"
import { Flag } from "../Flag"

import { IContentProps, IDriverProps } from "../../interfaces/Props"

import { getSuffix } from "../../util/ordinalSuffix"

import { MobileLabel, MobileContent } from "../../styles/Mobile"
import { RowBlock } from "../../styles/Row/Block"
import { RowInit, RowInitMobile } from "../../styles/Row/Init"
import { RowStart } from "../../styles/Row/Start"
import { RowEnd } from "../../styles/Row/End"
import { RowWrapperClickable } from "../../styles/Row/Wrapper"
import { RowBold } from "../../styles/Row/Misc"

const RowContent = ({ driver, team, index }: IContentProps) => {
  const { country, name, lastName, stats } = driver

  return (
    <>
      <RowStart>
        <MobileLabel>Driver</MobileLabel>
        <MobileContent>
          <Flag countryCode={country} large={true} /> {`${name} `}
          <strong>{lastName}</strong>
          {driver.rookie ? <RookieStatus /> : null}
        </MobileContent>
      </RowStart>

      <RowBold>
        <MobileLabel>Team</MobileLabel>
        <MobileContent>
          <Flag countryCode={team.country} large={true} /> {team.name}
        </MobileContent>
      </RowBold>

      <RowInitMobile>
        <MobileLabel>Championship position</MobileLabel>
        <MobileContent>{getSuffix(index + 1)}</MobileContent>
      </RowInitMobile>

      <RowBlock>
        <MobileLabel>Pole positions</MobileLabel>
        <MobileContent>{stats.poles}</MobileContent>
      </RowBlock>

      <RowBlock>
        <MobileLabel>Fastest laps</MobileLabel>
        <MobileContent>{stats.fastest}</MobileContent>
      </RowBlock>

      <RowEnd>
        <MobileLabel>Points</MobileLabel>
        <MobileContent>{stats.points}</MobileContent>
      </RowEnd>
    </>
  )
}

export const DriverRow = ({ driver, team, index, expand }: IDriverProps) => {
  return (
    <RowWrapperClickable onClick={() => expand()}>
      <RowInit>#{index + 1}</RowInit>

      <RowContent driver={driver} team={team} index={index} />
    </RowWrapperClickable>
  )
}
