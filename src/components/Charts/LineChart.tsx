import React, { useEffect, useRef } from "react"

import {
  drawLegend,
  drawGrid,
  drawAxis,
  drawLines,
  drawSvg,
  getLeftAxis,
  getBottomAxis,
  IDataEntry,
} from "../../services/charts/drawLineChart"

import { IResult } from "../../interfaces/render/Driver"

import { LineChartSvg } from "../../styles/LineChartSvg"

interface IProps {
  data: IDataEntry[]
  races: IResult[]
}

export function LineChart({ data, races }: IProps) {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    const size = {
      width: 700,
      height: 400,
      padding: 40,
    }

    const { xScale, xAxis } = getBottomAxis(races.length, size)
    const { yScale, yAxis } = getLeftAxis(data, size)

    const svg = drawSvg(svgRef.current, size)
    drawGrid(svg, xAxis, yAxis, races.length, size)
    drawAxis(
      svg,
      xAxis,
      yAxis,
      races.map(race => race.location),
      size
    )
    drawLegend(svg, data, size)
    drawLines(svg, xScale, yScale, data.slice().reverse())
  }, [data, races, svgRef])

  return <LineChartSvg ref={svgRef} />
}
