import React from "react"
import styled from "styled-components"

import { iconTypes } from "../util/icons"

const IconElement = styled.img<{ size: number }>`
  bottom: 2px;
  margin: 0;
  position: relative;
  width: ${p => p.size}px;
`

interface IIconProps {
  type: keyof typeof iconTypes
  singular: boolean
  size?: number
}

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
