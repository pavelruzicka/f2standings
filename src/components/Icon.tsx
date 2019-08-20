import React from "react"

import { iconTypes } from "../util/icons"

import { IIconProps } from "../interfaces/Props"

import { IconElement } from "../styles/Icon"

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
