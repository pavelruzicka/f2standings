import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

import { IDriverBase } from "../interfaces/Driver"
import { ITeam } from "../interfaces/Team"

interface IPageContext {
  pageContext: {
    teams: ITeam[]
    drivers: IDriverBase[]
  }
}

export default ({ pageContext: { teams, drivers } }: IPageContext) => {
  return (
    <>
      <Layout>
        <SEO title="Teams" />
        <h1>Teams</h1>

        {teams.map(team => (
          <li key={team.short}>{team.name}</li>
        ))}
      </Layout>
    </>
  )
}
