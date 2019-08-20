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
  createTooltip,
} from "./drawChart"

import "./chart.css"

export interface IDataEntry {
  points: [number, number][]
  shortLabel: string
  label: string
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

  .legend text {
    font-weight: 500;
    fill: rgba(0, 0, 0, 0.7);
  }

  .line {
    stroke-linecap: round;
    stroke-width: 2.25;
    fill: none;
    transition: opacity 0.2s ease;
  }

  .grid .tick line {
    opacity: 0.1;
    stroke-width: 0.75;
  }

  .axis-y .tick text {
    fill: rgba(0, 0, 0, 0.7);
    font-weight: 500;
    transform: translateX(-10px);
  }

  .axis-x .tick text {
    font-weight: 600;
    transform: translateY(10px);
  }

  .domain {
    display: none;
  }
`

const tooltip = createTooltip()

export function LineChart({ data, races }: IProps) {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    const size = {
      width: 700,
      height: 400,
      padding: 40,
    }

    const { xScale, xAxis } = getBottomAxis(races, size)
    const { yScale, yAxis } = getLeftAxis(data, size)

    const svg = drawSvg(svgRef.current, size)
    drawGrid(svg, xAxis, yAxis, races, size)
    drawAxis(svg, xAxis, yAxis, races, size)
    drawLegend(svg, xScale, yScale, data, size, tooltip)
    drawLines(svg, xScale, yScale, data.slice().reverse(), size, tooltip)
  }, [data, races, svgRef])

  return <SvgWrapper ref={svgRef} />
}
