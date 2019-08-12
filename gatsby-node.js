const axios = require("axios")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const templateDir = "./src/templates"

const get = endpoint => axios.get(`${process.env.API_URL}${endpoint}`)

const fetchData = async endpoint => {
  const { data } = await get(`/${endpoint}`)

  return data
}

exports.createPages = async ({ actions: { createPage } }) => {
  const drivers = await fetchData("drivers")
  const teams = await fetchData("teams")
  const calendar = await fetchData("races")

  createPage({
    path: `/`,
    component: require.resolve(`${templateDir}/drivers.tsx`),
    context: { drivers, teams, races: calendar },
  })

  createPage({
    path: `/teams`,
    component: require.resolve(`${templateDir}/teams.tsx`),
    context: { teams, drivers },
  })

  createPage({
    path: `/races`,
    component: require.resolve(`${templateDir}/races.tsx`),
    context: { drivers, teams, calendar },
  })
}
