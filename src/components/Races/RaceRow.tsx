import React from "react"

import { RaceDates } from "./RaceDates"
import { RacePole } from "./RacePole"
import { RacePartition } from "../Drivers/RacePartition"
import { RaceColumn } from "./RaceColumn"
import { Flag } from "../Flag"

import { RaceType } from "../../enums/RaceType"

import { IRaceRowProps } from "../../interfaces/Props"

import {
  MobileLabel,
  MobileContentReversed,
  MobileContentReversedSmall,
} from "../../styles/Mobile"
import { RowWrapper } from "../../styles/Row/Wrapper"
import { RowFiller } from "../../styles/Row/Misc"
import { Circuit } from "../../styles/Race/Misc"
import { RaceColumnWrapper } from "../../styles/Race/Column"
import { RowBlock } from "../../styles/Row/Block"
import { RowStart } from "../../styles/Row/Start"

export const RaceRow = ({ race, index, drivers, teams }: IRaceRowProps) => {
  const { feature, sprint } = race.races

  return (
    <RowWrapper>
      <RowStart>#{index + 1}</RowStart>

      <RaceDates feature={feature} sprint={sprint} />

      <RowBlock alignLeft>
        <MobileLabel varied>
          <span>R</span>
          <b>{index + 1}</b>
        </MobileLabel>

        <MobileContentReversed>
          <Circuit>
            <Flag countryCode={race.short} large />
            {race.circuit}
          </Circuit>
          <Flag countryCode={"empty"} large />
          <small>
            {race.city}, {race.country}
          </small>
        </MobileContentReversed>

        <MobileContentReversedSmall>
          <Circuit>{race.circuit}</Circuit>
          <Flag countryCode={race.short} large />
          <small>
            {race.city}, {race.country}
          </small>
        </MobileContentReversedSmall>
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

          {feature.podium && sprint.podium ? (
            <>
              <RaceColumn
                keys={["fp1", "fp2", "fp3"]}
                occupants={[0, 1, 2].map(n => feature.podium[n])}
                drivers={drivers}
                teams={teams}
                label={"Feature race podium"}
                mobile
                shortened
              />

              <RaceColumn
                keys={["sp1", "sp2", "sp3"]}
                occupants={[0, 1, 2].map(n => sprint.podium[n])}
                drivers={drivers}
                teams={teams}
                label={"Sprint race podium"}
                mobile
                shortened
              />

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

              <RaceColumn
                keys={["feature"]}
                occupants={[feature.fastest]}
                drivers={drivers}
                teams={teams}
                label={"Fastest in feature"}
                mobile
                shortened
              />

              <RaceColumn
                keys={["sprint"]}
                occupants={[sprint.fastest]}
                drivers={drivers}
                teams={teams}
                label={"Fastest in sprint"}
                mobile
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
