import React from "react"
import styled from "styled-components"

import { iconTypes } from "../util/icons"

const IconElement = styled.img`
  bottom: 2px;
  margin: 0;
  position: relative;
  width: 20px;
`

interface IIconProps {
  type: string
  singular: boolean
}

export const Icon = ({ type, singular }: IIconProps) => {
  const { desc, pluralizer } = (iconTypes as any)[type]
  const description = `${desc}${singular ? "" : pluralizer}`

  return (
    <IconElement
      src={`/icons/${type}.svg`}
      alt={description}
      title={description}
    />
  )
}
