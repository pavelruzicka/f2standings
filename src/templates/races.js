import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: { races } }) => (
  <>
    <Layout>
      <SEO title="Races" />
      <h1>Races</h1>

      {races.map(race => (
        <li>{race.circuit}</li>
      ))}
    </Layout>
  </>
)
