import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import * as d3 from "d3"
import { IDriverBase } from "../../interfaces/Driver"
import { teamColours } from "../../util/colours"
import { ITeam } from "../../interfaces/Team"

const width = 800
const height = 500
const padding = 30

interface IProps {
  data: {
    driver: IDriverBase
    points: [number, number][]
  }[]
  races: string[]
  teams: ITeam[]
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

export function LineChart({ data, races, teams }: IProps) {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    const maxX = races.length
    const maxY = d3.max(data, d => d3.max(d.points, ([_, x]) => x)) || 0

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
      .curve(d3.curveBundle)
      .x(([x]) => xScale(x))
      .y(([_, y]) => yScale(y))

    for (const results of data) {
      const team = teams.find(team => team.short === results.driver.team)

      chartGroup
        .append("path")
        .attr("fill", "none")
        .attr("stroke", teamColours[results.driver.team] || "#000")
        .attr("stroke-width", 2.25)
        .attr(
          "stroke-dasharray",
          team && team.drivers.indexOf(results.driver.short) === 1
            ? 11.3
            : "initial"
        )
        .attr("data-shit", results.driver.short)
        .attr("d", line(results.points) || "")
        .append("text")
        .attr("x", 0)
        .attr("y", 0)
        .attr("font-family", "sans-serif")
        .attr("font-size", "18px")
        .attr("fill", "red")
        .text("weewee")
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
  }, [data, races, svgRef, teams])

  return <SvgWrapper ref={svgRef} />
}
