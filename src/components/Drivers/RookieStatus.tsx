import React from "react"

import { Status } from "../../styles/Status"

export const RookieStatus = ({ noWidth = false }: { noWidth?: boolean }) => (
  <Status title={"Rookie"} noWidth={noWidth}>
    *
  </Status>
)
