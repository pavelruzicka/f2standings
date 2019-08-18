import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import * as d3 from "d3"

const width = 800
const height = 350
const padding = 20

interface IProps {
  data: {
    driver: string
    points: [number, number][]
    color: string
  }[]
  races: string[]
}

const SvgWrapper = styled.svg`
  text {
    font-family: "Red Hat Display", sans-serif;
  }

  .axis-y {
    .tick line {
    }
  }

  .axis-x {
    font-weight: bold;

    .tick line {
      display: none;
    }
  }
`

export function LineChart({ data, races }: IProps) {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    const maxX = d3.max(data, d => d3.max(d.points, ([x]) => x)) || 0
    const maxY = d3.max(data, d => d3.max(d.points, ([_, y]) => y)) || 0

    const xScale = d3
      .scaleLinear()
      .domain([0, maxX])
      .range([0, width - padding * 2])

    const yScale = d3
      .scaleLinear()
      .domain([0, maxY])
      .range([height - padding * 2, 0])

    const xAxis = d3.axisBottom(xScale).tickFormat(x => races[x.valueOf()])
    const yAxis = d3.axisLeft(yScale)

    const svg = d3
      .select(svgRef.current)
      .attr("width", "100%")
      .attr("height", height)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${width} ${height}`)

    svg.selectAll("*").remove()

    const chartGroup = svg
      .append("g")
      .attr("transform", `translate(${padding}, ${padding})`)

    const line = d3
      .line()
      .curve(d3.curveCardinal)
      .x(([x]) => xScale(x))
      .y(([_, y]) => yScale(y))

    for (const d of data) {
      chartGroup
        .append("path")
        .attr("fill", "none")
        .attr("stroke", d.color)
        .attr("stroke-width", 4)
        .attr("d", line(d.points) || "")
    }

    chartGroup
      .append("g")
      .attr("transform", `translate(0, ${height - padding * 2})`)
      .attr("class", "axis axis-x")
      .call(xAxis)
    chartGroup
      .append("g")
      .attr("class", "axis axis-y")
      .call(yAxis)
  }, [data, races, svgRef])

  return <SvgWrapper ref={svgRef} />
}
