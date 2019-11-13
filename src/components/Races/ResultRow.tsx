import React from "react"

import { Icon } from "../Icon"
import { Flag } from "../Flag"
import { RookieStatus } from "../Drivers/RookieStatus"

import { iconTypes } from "../../util/icons"

import { ResRow } from "../../styles/Results"
import { IDriverBase } from "../../interfaces/render/Driver"

export const ResultRow = ({
  icon,
  driver,
  drivers,
}: {
  icon: keyof typeof iconTypes
  driver: string
  drivers: IDriverBase[]
}) => {
  const driverInfo = drivers.find(d => d.short === driver)

  if (!driverInfo) {
    return null
  }

  return (
    <ResRow fastest={icon === "fastest"}>
      <Icon type={icon} singular />
      <Flag countryCode={driverInfo.country} large />
      {driverInfo.short}
      {driverInfo.rookie ? <RookieStatus /> : null}
    </ResRow>
  )
}
