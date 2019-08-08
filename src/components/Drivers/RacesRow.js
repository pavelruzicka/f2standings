import React from "react"

import RaceHeader from "./RaceHeader"
import RacePartition from "./RacePartition"
import RaceResult from "./RaceResult"

const RacesRow = ({ results, races }) => {
  return (
    <tr>
      <td colSpan="6" style={{ padding: 0 }}>
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
                <React.Fragment key={race.location}>
                  <RacePartition type="feature" />
                  <RacePartition type="sprint" />
                </React.Fragment>
              ))}
            </tr>
            <tr>
              {results.map(race => {
                if (race.upcoming) {
                  return (
                    <RaceResult
                      race={race}
                      key={race.location}
                      upcoming={true}
                      type={null}
                    />
                  )
                } else {
                  return (
                    <React.Fragment key={race.location}>
                      <RaceResult race={race} upcoming={false} type="feature" />
                      <RaceResult race={race} upcoming={false} type="sprint" />
                    </React.Fragment>
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
