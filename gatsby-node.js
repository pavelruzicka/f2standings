const axios = require("axios")
const dotenv = require("dotenv")

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const fetchData = async endpoint => {
  if (!process.env.API_URL) {
    throw new Error("No API_URL environment variable supplied")
  }

  const { data } = await axios.get(`${process.env.API_URL}/${endpoint}`)

  return data
}

exports.createPages = async ({ actions: { createPage, createRedirect } }) => {
  const templateDir = "./src/templates"
  const driversComponent = require.resolve(`${templateDir}/drivers.tsx`)
  const teamsComponent = require.resolve(`${templateDir}/teams.tsx`)
  const racesComponent = require.resolve(`${templateDir}/races.tsx`)

  const drivers = await fetchData("drivers")
  const teams = await fetchData("teams")
  const races = await fetchData("races")
  const context = { drivers, teams, races }

  createRedirect({
    fromPath: `/`,
    isPermantent: true,
    redirectInBrowser: true,
    toPath: `/drivers`,
  })

  createPage({
    path: `/drivers`,
    component: driversComponent,
    context: { ...context, chart: false },
  })

  createPage({
    path: `/drivers/chart`,
    component: driversComponent,
    context: { ...context, chart: true },
  })

  createPage({
    path: `/teams`,
    component: teamsComponent,
    context: { ...context, chart: false },
  })

  createPage({
    path: `/teams/chart`,
    component: teamsComponent,
    context: { ...context, chart: true },
  })

  createPage({
    path: `/races`,
    component: racesComponent,
    context: context,
  })
}
