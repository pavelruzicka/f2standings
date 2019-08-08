import React from "react"

import RaceHeader from "./RaceHeader"
import RacePartition from "./RacePartition"
import RaceResult from "./RaceResult"

const RacesRow = ({ results, races }) => {
  return (
    <tr>
      <td colspan="6" style={{ padding: 0 }}>
        <table class="table table-sm" style={{ marginBottom: 0 }}>
          <thead>
            <tr>
              {results.map(race => (
                <RaceHeader race={race} races={races} />
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {results.map(() => (
                <>
                  <RacePartition type="feature" />
                  <RacePartition type="sprint" />
                </>
              ))}
            </tr>
            <tr>
              {results.map(race => {
                if (race.upcoming) {
                  return <RaceResult race={race} upcoming={true} type={null} />
                } else {
                  return (
                    <>
                      <RaceResult race={race} upcoming={false} type="feature" />
                      <RaceResult race={race} upcoming={false} type="sprint" />
                    </>
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
