import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "./image"

const Header = () => (
  <header
    style={{
      marginBottom: `2rem`,
      margin: `0 auto`,
      maxWidth: 1024,
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
    }}
  >
    <div style={{}}>
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            display: `flex`,
          }}
        >
          <div style={{ width: 110, margin: `1rem` }}>
            <Image />
          </div>
        </Link>
      </h3>
    </div>

    <div>
      <Link to="/">Drivers</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/races">Races</Link>
    </div>
  </header>
)

export default Header
