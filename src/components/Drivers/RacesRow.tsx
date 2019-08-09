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
        <table className="table table-sm" style={{ marginBottom: 0 }}>
          <thead>
            <tr>
              {results.map(race => (
                <RaceHeader race={race} races={races} key={race.location} />
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {results.map(race => (
                <Fragment key={race.location}>
                  <RacePartition type={RaceType.Feature} />
                  <RacePartition type={RaceType.Sprint} />
                </Fragment>
              ))}
            </tr>
            <tr>
              {results.map(race => {
                if (race.upcoming) {
                  return (
                    <RaceResult
                      result={race}
                      key={race.location}
                      upcoming={true}
                    />
                  )
                } else {
                  return (
                    <Fragment key={race.location}>
                      <RaceResult
                        result={race}
                        upcoming={false}
                        type="feature"
                      />
                      <RaceResult
                        result={race}
                        upcoming={false}
                        type="sprint"
                      />
                    </Fragment>
                  )
                }
              })}
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  )
}

export default RacesRow
