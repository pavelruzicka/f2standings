import React from "react"
import styled from "styled-components"

const Status = styled.span<{ noWidth: boolean }>`
  line-height: 0;
  vertical-align: baseline;
  position: relative;
  display: ${p => (p.noWidth ? "inline-block" : "initial")};
  width: ${p => (p.noWidth ? 0 : "auto")};
  font-size: 90%;
  top: -0.25rem;
  left: 0.15rem;
  color: #444;
  cursor: default;
`

const RookieStatus = ({ noWidth = false }: { noWidth?: boolean }) => (
  <Status title={"Rookie"} noWidth={noWidth}>
    *
  </Status>
)

export default RookieStatus
