import { Link } from "gatsby"
import React from "react"

import Image from "./image"

const linkStyle = {
  textDecoration: `none`,
  fontWeight: `bold`,
  color: `#000000cc`,
  opacity: `.35`,
  margin: `0 .75rem`,
}

const Header = () => (
  <header
    style={{
      margin: `1rem auto 2.5rem`,
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
          <div style={{ width: 90, margin: `1rem .5rem` }}>
            <Image />
          </div>
        </Link>
      </h3>
    </div>

    <div>
      <Link to="/" style={linkStyle} activeStyle={{ opacity: 1 }}>
        Drivers
      </Link>
      <Link to="/teams" style={linkStyle} activeStyle={{ opacity: 1 }}>
        Teams
      </Link>
      <Link to="/races" style={linkStyle} activeStyle={{ opacity: 1 }}>
        Races
      </Link>
    </div>
  </header>
)

export default Header
