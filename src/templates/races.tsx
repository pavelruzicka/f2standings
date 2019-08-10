import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

import { IRace } from "../interfaces/Race"

interface IPageContext {
  pageContext: {
    races: IRace[]
  }
}

export default ({ pageContext: { races } }: IPageContext) => {
  return (
    <>
      <Layout>
        <SEO title="Races" />
        <h1>Races</h1>

        {races.map(race => (
          <li key={race.short}>{race.circuit}</li>
        ))}
      </Layout>
    </>
  )
}
