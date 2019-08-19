import React, { useEffect, useRef } from "react"
import styled from "styled-components"

import {
  drawLegend,
  drawGrid,
  drawAxis,
  drawLines,
  drawSvg,
  getLeftAxis,
  getBottomAxis,
} from "./drawChart"

export interface IDataEntry {
  points: [number, number][]
  shortLabel: string
  longLabel: string
  dotted: boolean
  color: string
}

interface IProps {
  data: IDataEntry[]
  races: string[]
}

const SvgWrapper = styled.svg`
  width: 100%;

  text {
    font-family: "Red Hat Display", sans-serif;
  }

  .legend circle {
    stroke-width: 2;
  }

  .line {
    stroke-linecap: round;
    stroke-width: 2.25;
    fill: none;
  }

  .grid .tick line {
    opacity: 0.1;
    stroke-width: 0.75;
  }

  .axis-y .tick text {
    transform: translateX(-10px);
  }

  .axis-x .tick text {
    font-weight: bold;
    transform: translateY(10px);
  }

  .domain {
    display: none;
  }
`

export function LineChart({ data, races }: IProps) {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    const size = {
      width: 700,
      height: 400,
      padding: 30,
    }

    const { xScale, xAxis } = getBottomAxis(races, size)
    const { yScale, yAxis } = getLeftAxis(data, size)

    const svg = drawSvg(svgRef.current, size)
    drawGrid(svg, xAxis, yAxis, races, size)
    drawAxis(svg, xAxis, yAxis, races, size)
    drawLegend(svg, data, size)
    drawLines(svg, xScale, yScale, data, size)
  }, [data, races, svgRef])

  return <SvgWrapper ref={svgRef} />
}
