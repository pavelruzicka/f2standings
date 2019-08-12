import React from "react"
import styled from "styled-components"

const IconElement = styled.img`
  bottom: 2px;
  margin: 0;
  position: relative;
  width: 22;
`

interface IIconProps {
  type: string
  singular: boolean
}

export const Icon = ({ type, singular }: IIconProps) => {
  const description =
    type === "pole"
      ? `Pole position${singular ? "" : "s"}`
      : `Fastest lap${singular ? "" : "s"}`

  return (
    <IconElement
      src={`/icons/${type}.svg`}
      alt={description}
      title={description}
    />
  )
}
