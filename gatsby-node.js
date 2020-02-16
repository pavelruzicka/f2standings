const axios = require("axios")
const dotenv = require("dotenv")

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

async function get(url) {
  if (!process.env.API_URL) {
    throw new Error("No API_URL environment variable supplied")
  }

  const client = axios.create({
    baseURL: process.env.API_URL,
  })

  const result = await client.get(url)

  return result.data
}

exports.createPages = async ({ actions: { createPage, createRedirect } }) => {
  const driversComponent = require.resolve("./src/templates/drivers.tsx")
  const teamsComponent = require.resolve("./src/templates/teams.tsx")
  const racesComponent = require.resolve("./src/templates/races.tsx")

  const availableYears = await get("years")
  const latestYear = availableYears[availableYears.length - 1]

  createRedirect({
    fromPath: "/",
    toPath: `/${latestYear}/drivers`,
    redirectInBrowser: true,
    force: true,
  })

  createRedirect({
    fromPath: "/drivers",
    toPath: `/${latestYear}/drivers`,
    redirectInBrowser: true,
    force: true,
  })

  createRedirect({
    fromPath: "/drivers/chart",
    toPath: `/${latestYear}/drivers/chart`,
    redirectInBrowser: true,
    force: true,
  })

  createRedirect({
    fromPath: "/teams",
    toPath: `/${latestYear}/teams`,
    redirectInBrowser: true,
    force: true,
  })

  createRedirect({
    fromPath: "/teams/chart",
    toPath: `/${latestYear}/teams/chart`,
    redirectInBrowser: true,
    force: true,
  })

  createRedirect({
    fromPath: "/races",
    toPath: `/${latestYear}/races`,
    redirectInBrowser: true,
    force: true,
  })

  for (const year of availableYears) {
    const drivers = await get(`/${year}/drivers`)
    const teams = await get(`/${year}/teams`)
    const races = await get(`/${year}/races`)
    const context = { year, availableYears, drivers, teams, races }

    createRedirect({
      fromPath: `/${year}`,
      toPath: `/${year}/drivers`,
      redirectInBrowser: true,
      force: true,
    })

    createPage({
      path: `/${year}/drivers`,
      component: driversComponent,
      context: { ...context, chart: false },
    })

    createPage({
      path: `/${year}/drivers/chart`,
      component: driversComponent,
      context: { ...context, chart: true },
    })

    createPage({
      path: `/${year}/teams`,
      component: teamsComponent,
      context: { ...context, chart: false },
    })

    createPage({
      path: `/${year}/teams/chart`,
      component: teamsComponent,
      context: { ...context, chart: true },
    })

    createPage({
      path: `/${year}/races`,
      component: racesComponent,
      context: context,
    })
  }
}
