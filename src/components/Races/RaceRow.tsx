import React from "react"
import styled from "styled-components"

import RaceDates from "./RaceDates"
import RacePole from "./RacePole"
import RacePartition from "../Drivers/RacePartition"
import RaceColumn from "./RaceColumn"

import { Flag } from "../Flag"

import { RaceType } from "../../enums/RaceType"

import { IDriverBase } from "../../interfaces/Driver"
import { IRace } from "../../interfaces/Race"
import { ITeam } from "../../interfaces/Team"

import {
  RowInit,
  RowLeftAligned,
  RowWrapper,
  RowEnd,
  RowFiller,
} from "../../styles/TableRow"
import {
  MobileLabel,
  MobileContent,
  RaceContentWrapper,
} from "../../styles/Mobile"

const Circuit = styled.div`
  font-weight: 500;
`

interface IRaceRowProps {
  race: IRace
  index: number
  drivers: IDriverBase[]
  teams: ITeam[]
}

const RaceRow = ({ race, index, drivers, teams }: IRaceRowProps) => {
  const { feature, sprint } = race.races

  return (
    <RowWrapper>
      <RowInit>#{index + 1}</RowInit>

      <RaceDates feature={feature} sprint={sprint} mobile={false} />

      <RowLeftAligned border={true}>
        <MobileLabel varied={true}>Round {index + 1}</MobileLabel>
        <MobileContent>
          <Circuit>
            <Flag countryCode={race.short} large={true} />
            {race.circuit}
          </Circuit>
          <Flag countryCode={"empty"} large={true} />
          <small>
            {race.city}, {race.country}
          </small>
        </MobileContent>
      </RowLeftAligned>

      <RaceDates feature={feature} sprint={sprint} mobile={true} />

      {feature.pole ? (
        <>
          <RacePole feature={feature} drivers={drivers} teams={teams} />

          <RaceContentWrapper>
            <RacePartition type={RaceType.Feature} padded={false} />
            <RacePartition type={RaceType.Sprint} padded={false} />
          </RaceContentWrapper>

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
              />

              <RaceColumn
                keys={["feature"]}
                occupants={[feature.fastest]}
                drivers={drivers}
                teams={teams}
                label={"Fastest lap of feature race"}
                mobile={true}
              />

              <RaceColumn
                keys={["sprint"]}
                occupants={[sprint.fastest]}
                drivers={drivers}
                teams={teams}
                label={"Fastest lap of sprint race"}
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

export default RaceRow
