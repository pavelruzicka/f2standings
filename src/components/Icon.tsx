import React from "react"
import styled from "styled-components"

import { iconTypes } from "../util/icons"

import { IIconProps } from "../interfaces/Props"

const IconElement = styled.img<{ size: number }>`
  bottom: 2px;
  margin: 0;
  position: relative;
  width: ${p => p.size}px;
`

export const Icon = ({ type, singular, size = 20 }: IIconProps) => {
  const { desc, pluralizer } = iconTypes[type]
  const description = `${desc}${singular ? "" : pluralizer}`

  return (
    <IconElement
      src={`/icons/${type}.svg`}
      alt={description}
      title={description}
      size={size}
    />
  )
}
