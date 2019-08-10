import React from "react"
import styled from "styled-components"

const IconElement = styled.img`
  bottom: 2px;
  margin: 0;
  position: relative;
  width: 22;
`

export const Icon = ({ type }: { type: string }) => {
  const desc = type === "pole" ? "Pole positions" : "Fastest laps"

  return <IconElement src={`/icons/${type}.svg`} alt={desc} title={desc} />
}
