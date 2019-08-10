import { Link } from "gatsby"
import React from "react"

import Image from "./Image"

import { header, link } from "../styles/header"

export const Header = () => (
  <header style={header}>
    <div>
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            display: `flex`,
            textDecoration: `none`,
          }}
        >
          <div style={{ width: 90, margin: `1rem .5rem` }}>
            <Image />
          </div>
        </Link>
      </h3>
    </div>

    <div>
      <Link to="/" style={link} activeStyle={{ opacity: 1 }}>
        Drivers
      </Link>
      <Link to="/teams" style={link} activeStyle={{ opacity: 1 }}>
        Teams
      </Link>
      <Link to="/races" style={link} activeStyle={{ opacity: 1 }}>
        Races
      </Link>
    </div>
  </header>
)
