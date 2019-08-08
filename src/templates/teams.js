import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

export default ({ pageContext: { teams, drivers } }) => (
  <>
    <Layout>
      <SEO title="Teams" />
      <h1>Teams</h1>

      {teams.map(team => (
        <li>{team.name}</li>
      ))}
    </Layout>
  </>
)
