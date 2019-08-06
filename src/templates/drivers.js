import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: { drivers } }) => (
  <>
    <Layout>
      <SEO title="Drivers" />
      <h1>Drivers</h1>

      {drivers.map(driver => (
        <li>{driver.lastName}</li>
      ))}
    </Layout>
  </>
)
