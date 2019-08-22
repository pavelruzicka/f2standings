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

import { RowInit } from "../../styles/Row/Init"
import { RowEnd } from "../../styles/Row/End"
import { RowWrapper } from "../../styles/Row/Wrapper"
import { RowLeftAligned, RowFiller } from "../../styles/Row/Misc"
import { RaceWrapper } from "../../styles/Race/Wrapper"
import { Circuit } from "../../styles/Race/Misc"

export const RaceRow = ({ race, index, drivers, teams }: IRaceRowProps) => {
  const { feature, sprint } = race.races

  return (
    <RowWrapper>
      <RowInit>#{index + 1}</RowInit>

      <RaceDates feature={feature} sprint={sprint} mobile={false} />

      <RowLeftAligned border={true}>
        <MobileLabel varied={true}>R{index + 1}</MobileLabel>

        <MobileContentReversed>
          <Circuit>
            <Flag countryCode={race.short} large={true} />
            {race.circuit}
          </Circuit>
          <Flag countryCode={"empty"} large={true} />
          <small>
            {race.city}, {race.country}
          </small>
        </MobileContentReversed>

        <MobileContentReversedSmall>
          <Circuit>
            <Flag countryCode={"empty"} large={true} />
            {race.circuit}
          </Circuit>
          <Flag countryCode={race.short} large={true} />
          <small>
            {race.city}, {race.country}
          </small>
        </MobileContentReversedSmall>
      </RowLeftAligned>

      <RaceDates feature={feature} sprint={sprint} mobile={true} />

      {feature.pole ? (
        <>
          <RacePole feature={feature} drivers={drivers} teams={teams} />

          <RaceWrapper>
            <RacePartition type={RaceType.Feature} padded={false} />
            <RacePartition type={RaceType.Sprint} padded={false} />
          </RaceWrapper>

          {feature.podium && sprint.podium ? (
            <>
              <RaceColumn
                keys={["feature"]}
                occupants={[0, 1, 2].map(n => feature.podium[n])}
                drivers={drivers}
                teams={teams}
                label={"Feature race podium"}
                mobile={true}
              />

              <RaceColumn
                keys={["sprint"]}
                occupants={[0, 1, 2].map(n => sprint.podium[n])}
                drivers={drivers}
                teams={teams}
                label={"Sprint race podium"}
                mobile={true}
              />

              {[0, 1, 2].map(n => (
                <RaceColumn
                  keys={["feature", "sprint"]}
                  occupants={[feature.podium[n], sprint.podium[n]]}
                  drivers={drivers}
                  teams={teams}
                  key={n}
                  mobile={false}
                />
              ))}
            </>
          ) : null}

          {feature.fastest && sprint.fastest ? (
            <>
              <RaceColumn
                keys={["feature", "sprint"]}
                occupants={[feature.fastest, sprint.fastest]}
                drivers={drivers}
                teams={teams}
                mobile={false}
              />

              <RaceColumn
                keys={["feature"]}
                occupants={[feature.fastest]}
                drivers={drivers}
                teams={teams}
                label={"Fastest in feature"}
                mobile={true}
              />

              <RaceColumn
                keys={["sprint"]}
                occupants={[sprint.fastest]}
                drivers={drivers}
                teams={teams}
                label={"Fastest in sprint"}
                mobile={true}
              />
            </>
          ) : (
            <RowEnd />
          )}
        </>
      ) : (
        <>
          {[0, 1, 2, 3, 4].map(n => (
            <RowFiller key={n} />
          ))}
        </>
      )}

      <RowEnd />
    </RowWrapper>
  )
}
