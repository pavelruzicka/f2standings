import React from "react"
import styled from "styled-components"

const Status = styled.span`
  line-height: 0;
  position: relative;
  vertical-align: baseline;
  font-weight: 700;
  font-size: 90%;
  top: -0.25rem;
  left: 0.15rem;
  color: black;
`

const RookieStatus = () => <Status title={"Rookie"}>*</Status>

export default RookieStatus
