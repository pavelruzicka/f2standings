import React, { Fragment } from "react"

import RaceHeader from "./RaceHeader"
import RacePartition from "./RacePartition"
import RaceResult from "./RaceResult"

import { RaceType } from "../../enums/RaceType"

import { IResult } from "../../interfaces/Driver"
import { IRace } from "../../interfaces/Race"

interface IRacesRowProps {
  results: IResult[]
  races: IRace[]
}

const RacesRow = ({ results, races }: IRacesRowProps) => {
  return (
    <tr>
      <td colSpan={6} style={{ padding: 0 }}>
        <div style={{ marginBottom: 0, display: `flex` }}>
          {results.map((race, index) => (
            <div
              key={race.short}
              style={{
                flex: `1 1 0`,
              }}
            >
              <RaceHeader race={race} races={races} key={race.location} />

              <div style={{ display: `flex`, padding: `0 .35rem` }}>
                <RacePartition type={RaceType.Feature} />
                <RacePartition type={RaceType.Sprint} />
              </div>

              <div style={{ display: `flex`, padding: `0 .35rem` }}>
                {/* convert strings to RaceType*/}
                {!race.upcoming ? (
                  <>
                    <RaceResult result={race} upcoming={false} type="feature" />
                    <RaceResult result={race} upcoming={false} type="sprint" />
                  </>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </td>
    </tr>
  )
}

export default RacesRow
