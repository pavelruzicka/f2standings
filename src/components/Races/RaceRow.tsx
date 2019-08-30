import React from "react"

import { RaceDates } from "./RaceDates"
import { RacePole } from "./RacePole"
import { RacePartition } from "../Drivers/Races/RacePartition"
import { RaceColumn } from "./RaceColumn"
import { ResultRow } from "./ResultRow"
import { Flag } from "../Flag"

import { RaceType } from "../../enums/RaceType"

import { IRaceRowProps } from "../../interfaces/Props"

import { TableContent, MobileLabel, DesktopContent } from "../../styles/Mobile"
import { Results, ResultColumn, ResultHeader } from "../../styles/Results"
import { RowWrapper, RowFiller, RowStart, RowBlock } from "../../styles/Row"
import { EntityPos, EntityName } from "../../styles/Entity"
import { Circuit } from "../../styles/Race/Misc"
import { RaceColumnWrapper } from "../../styles/Race/Column"

export const RaceRow = ({ race, index, drivers, teams }: IRaceRowProps) => {
  const { feature, sprint } = race.races

  return (
    <RowWrapper>
      <RowStart>#{index + 1}</RowStart>

      <RaceDates feature={feature} sprint={sprint} />

      <RowBlock mobileOnly alignLeft bold>
        <MobileLabel>
          <EntityPos>{index + 1}</EntityPos>
        </MobileLabel>
        <TableContent>
          <EntityName>
            <Flag countryCode={race.short} large /> {race.country}
          </EntityName>

          <small>{race.circuit}</small>
        </TableContent>
      </RowBlock>

      <RowBlock desktopOnly alignLeft>
        <DesktopContent>
          <Circuit>
            <Flag countryCode={race.short} large />
            {race.circuit}
          </Circuit>
          <Flag countryCode={"empty"} large />
          <small>
            {race.city}, {race.country}
          </small>
        </DesktopContent>
      </RowBlock>

      <RaceDates feature={feature} sprint={sprint} mobile />

      {feature.pole ? (
        <>
          <RacePole feature={feature} drivers={drivers} teams={teams} />

          <RowFiller />

          <RaceColumnWrapper>
            <RacePartition type={RaceType.Feature} />
            <RacePartition type={RaceType.Sprint} />
          </RaceColumnWrapper>

          <Results>
            <ResultColumn>
              <ResultHeader>Feature race</ResultHeader>

              <ResultRow
                icon={"p1"}
                drivers={drivers}
                driver={feature.podium[0]}
              />
              <ResultRow
                icon={"p2"}
                drivers={drivers}
                driver={feature.podium[1]}
              />
              <ResultRow
                icon={"p3"}
                drivers={drivers}
                driver={feature.podium[2]}
              />
              {feature.fastest ? (
                <ResultRow
                  icon={"fastest"}
                  drivers={drivers}
                  driver={feature.fastest}
                />
              ) : null}
            </ResultColumn>

            <ResultColumn second>
              <ResultHeader>Sprint race</ResultHeader>

              <ResultRow
                icon={"p1"}
                drivers={drivers}
                driver={sprint.podium[0]}
              />
              <ResultRow
                icon={"p2"}
                drivers={drivers}
                driver={sprint.podium[1]}
              />
              <ResultRow
                icon={"p3"}
                drivers={drivers}
                driver={sprint.podium[2]}
              />
              {sprint.fastest ? (
                <ResultRow
                  icon={"fastest"}
                  drivers={drivers}
                  driver={sprint.fastest}
                />
              ) : null}
            </ResultColumn>
          </Results>

          {feature.podium && sprint.podium ? (
            <>
              {[0, 1, 2].map(n => (
                <RaceColumn
                  keys={["feature", "sprint"]}
                  occupants={[feature.podium[n], sprint.podium[n]]}
                  drivers={drivers}
                  teams={teams}
                  key={n}
                  shortened
                />
              ))}
            </>
          ) : null}

          <RowFiller />

          {feature.fastest && sprint.fastest ? (
            <>
              <RaceColumn
                keys={["feature", "sprint"]}
                occupants={[feature.fastest, sprint.fastest]}
                drivers={drivers}
                teams={teams}
                shortened
              />
            </>
          ) : (
            <RowFiller />
          )}
        </>
      ) : (
        <RowFiller colSpan={8} />
      )}
    </RowWrapper>
  )
}
