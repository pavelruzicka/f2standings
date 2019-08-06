import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: { teams } }) => (
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
