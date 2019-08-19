import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import * as d3 from "d3"

const width = 700
const height = 400
const padding = 30
const legendSize = 20

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
  text {
    font-family: "Red Hat Display", sans-serif;
  }

  .grid .tick line {
    opacity: 0.1;
    stroke-width: 0.75;
  }

  .axis-y {
    .tick {
      text {
        transform: translateX(-10px);
      }
    }
  }

  .axis-x {
    .tick {
      text {
        font-weight: bold;
        transform: translateY(10px);
      }
    }
  }

  .domain {
    display: none;
  }
`

export function LineChart({ data, races }: IProps) {
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    const maxX = races.length - 1
    const maxY = d3.max(data, d => d3.max(d.points, ([_, x]) => x)) || 0

    const xScale = d3
      .scaleLinear()
      .domain([0, maxX])
      .range([0, width - legendSize])

    const yScale = d3
      .scaleLinear()
      .domain([0, maxY])
      .range([height, 0])

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

    const svg = d3
      .select(svgRef.current)
      .attr("width", "100%")
      .attr("height", height)
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${width + padding * 2} ${height + padding * 2}`)

    svg.selectAll("*").remove()

    const chartGroup = svg
      .append("g")
      .attr("transform", `translate(${padding}, ${padding})`)

    const legend = chartGroup
      .append("g")
      .attr("class", "legend")
      .attr("transform", `translate(${width - legendSize + 20}, 0)`)

    data.forEach((result, index) => {
      const y = index * 18
      const radius = 4

      const circle = legend
        .append("circle")
        .attr("r", radius)
        .attr("cy", y - radius / 2 - 1.5)
        .attr("cx", -radius * 2)
        .attr("fill", "none")
        .attr("stroke-width", 2)

      if (result.dotted) {
        circle.attr("r", radius - 1)
        circle.attr("stroke", result.color)
      } else {
        circle.attr("fill", result.color)
      }

      legend
        .append("text")
        .text(result.shortLabel)
        .attr("y", y)
        .attr("font-size", 10)
        .attr("title", result.longLabel)
    })

    chartGroup
      .append("g")
      .attr("class", "grid grid-y")
      .attr("transform", `translate(0, 0)`)
      .call(yAxis.tickSize(-width + legendSize).tickFormat(() => ""))

    chartGroup
      .append("g")
      .attr("class", "grid grid-x")
      .attr("transform", `translate(0, ${height})`)
      .call(
        xAxis
          .ticks(races.length - 1)
          .tickSize(-height)
          .tickFormat(() => "")
      )

    chartGroup
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .attr("class", "axis axis-x")
      .call(xAxis.tickSize(0).tickFormat(s => races[s.valueOf()]))
    chartGroup
      .append("g")
      .attr("class", "axis axis-y")
      .call(yAxis.tickSize(0).tickFormat(s => String(s)))

    const line = d3
      .line()
      .curve(d3.curveBasis)
      .x(([x]) => xScale(x))
      .y(([_, y]) => yScale(y))

    for (const result of data) {
      chartGroup
        .append("path")
        .attr("fill", "none")
        .attr("stroke", result.color)
        .attr("stroke-width", 2.25)
        .attr("stroke-linecap", "round")
        .attr("stroke-dasharray", result.dotted ? "11 6" : "initial")
        .attr("d", line(result.points) || "")
    }
  }, [data, races, svgRef])

  return <SvgWrapper ref={svgRef} />
}
