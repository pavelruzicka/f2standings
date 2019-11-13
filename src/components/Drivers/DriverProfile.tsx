import React from "react"
import { useBoolean } from "react-hanger"

import { RacesRow } from "./Races/RacesRow"

import { IProfileProps } from "../../interfaces/Props"

import { Flag } from "../Flag"
import { Icon } from "../Icon"
import { RookieStatus } from "./RookieStatus"

import { countries } from "../../util/countries"

import { RowStart, RowBlock, RowWrapperClickable } from "../../styles/Row"
import { TableContent, MobileLabel } from "../../styles/Mobile"
import { EntityPos, EntityName } from "../../styles/Entity"
import {
  StatsBox,
  StatsBlock,
  StatHeading,
  StatValue,
} from "../../styles/Stats"
import { ExpandHelper } from "../../styles/ExpandHelper"

export const DriverProfile = ({
  driver,
  teams,
  index,
  open,
}: IProfileProps) => {
  const racesVisible = useBoolean(open.includes(index))

  const country = countries[driver.country]
  const team = teams.find(team => team.short === driver.team)
  if (!team) {
    return null
  }

  return (
    <>
      <RowWrapperClickable onClick={racesVisible.toggle} short={driver.short}>
        <RowStart>#{index + 1}</RowStart>

        <RowBlock alignLeft>
          <MobileLabel>
            <EntityPos>{index + 1}</EntityPos>
          </MobileLabel>
          <TableContent entity>
            <Flag countryCode={driver.country} large />
            <EntityName>{driver.name} </EntityName>
            <strong>{driver.lastName}</strong>
            {driver.rookie ? <RookieStatus /> : null}
          </TableContent>
        </RowBlock>

        <RowBlock alignLeft mobileOnly bold>
          <MobileLabel>Country</MobileLabel>
          <TableContent>
            <Flag countryCode={driver.country} large /> {country}
          </TableContent>
        </RowBlock>

        <RowBlock alignLeft bold>
          <MobileLabel>Team</MobileLabel>
          <TableContent>
            <Flag countryCode={team.country} large /> {team.name}
          </TableContent>
        </RowBlock>

        <StatsBox>
          <StatsBlock>
            <StatHeading>
              <Icon type={"pole"} />
            </StatHeading>
            <StatValue>{driver.stats.poles}</StatValue>
          </StatsBlock>

          <StatsBlock>
            <StatHeading>
              <Icon type={"fastest"} />
            </StatHeading>
            <StatValue>{driver.stats.fastest}</StatValue>
          </StatsBlock>

          <StatsBlock>
            <StatHeading>Pts</StatHeading>
            <StatValue>{driver.stats.points}</StatValue>
          </StatsBlock>
        </StatsBox>

        <RowBlock desktopOnly>
          <TableContent>{driver.stats.poles}</TableContent>
        </RowBlock>

        <RowBlock desktopOnly>
          <TableContent>{driver.stats.fastest}</TableContent>
        </RowBlock>

        <RowBlock desktopOnly>
          <TableContent>{driver.stats.points}</TableContent>
        </RowBlock>
      </RowWrapperClickable>

      {racesVisible.value ? (
        <RacesRow results={driver.results} driver={driver} />
      ) : (
        <ExpandHelper onClick={racesVisible.toggle} mobileOnly>
          <td>Tap to expand results</td>
        </ExpandHelper>
      )}
    </>
  )
}
