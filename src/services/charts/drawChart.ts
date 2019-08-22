import * as d3 from "d3"

export interface IDataEntry {
  points: [number, number][]
  shortLabel: string
  label: string
  dotted: boolean
  color: string
}

interface ISize {
  width: number
  height: number
  padding: number
}

export function getBottomAxis(races: string[], size: ISize) {
  // Create math functions for horizontal x axis with flags and race locations
  const maxX = races.length - 1

  const xScale = d3
    .scaleLinear()
    .domain([0, maxX])
    .range([0, size.width - size.padding])

  const xAxis = d3.axisBottom(xScale)

  return { xScale, xAxis }
}

export function getLeftAxis(data: IDataEntry[], size: ISize) {
  // Create math functions for vertical y axis with points count
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const maxY = d3.max(data, d => d3.max(d.points, ([_, x]) => x)) || 0

  const yScale = d3
    .scaleLinear()
    .domain([0, maxY])
    .range([size.height, 0])

  const yAxis = d3.axisLeft(yScale)

  return { yScale, yAxis }
}

export function drawLegend(
  root: d3.Selection<SVGGElement, unknown, null, undefined>,
  xScale: d3.ScaleLinear<number, number>,
  yScale: d3.ScaleLinear<number, number>,
  data: IDataEntry[],
  size: ISize
) {
  // Create root element for the legend
  const legend = root
    .append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${size.width}, 0)`)

  // Create an entry in the legend for every team or driver
  data.forEach((result, index) => {
    const y = index * 19

    const group = legend.append("g").attr("class", "legend-item")

    group
      .append("rect")
      .attr("x", -16)
      .attr("y", y - 14)
      .attr("height", 19)
      .attr("width", "100%")
      .attr("fill", "rgba(0, 0, 0, 0)")

    // Color indicator for the legend item
    const circle = group
      .append("circle")
      .attr("r", 4)
      .attr("cy", y - 3.5)
      .attr("cx", -8)
      .attr("fill", "none")

    if (result.dotted) {
      circle.attr("r", 3)
      circle.attr("stroke", result.color)
    } else {
      circle.attr("fill", result.color)
    }

    // Text for the legend item
    group
      .append("text")
      .text(result.shortLabel)
      .attr("y", y)
      .attr("font-size", 10)
      .attr("title", result.label)

    const reversedData = data.slice().reverse()
    const tooltip = d3.select("div[data-tooltip]")

    // Show tooltip
    group
      .on("mouseenter", () => {
        highlightLines(root, reversedData, result)

        tooltip
          .html(result.label)
          .transition()
          .duration(100)
          .style("opacity", 1)
          .style(
            "transform",
            `translate(${d3.event.pageX}px, ${d3.event.pageY - 28}px)`
          )
      })
      .on("mousemove", () => {
        tooltip.style(
          "transform",
          `translate(${d3.event.pageX}px, ${d3.event.pageY - 28}px)`
        )
      })
      .on("mouseleave", () => {
        highlightLines(root, reversedData, null)

        tooltip
          .transition()
          .duration(100)
          .style("opacity", 0)
      })
  })
}

export function drawGrid(
  root: d3.Selection<SVGGElement, unknown, null, undefined>,
  xAxis: d3.Axis<number | { valueOf(): number }>,
  yAxis: d3.Axis<number | { valueOf(): number }>,
  races: string[],
  size: ISize
) {
  // Create grid lines for the y axis
  root
    .append("g")
    .attr("class", "grid grid-y")
    .attr("transform", `translate(0, 0)`)
    .call(yAxis.tickSize(-size.width + size.padding).tickFormat(() => ""))

  // Create grid lines for the x axis
  root
    .append("g")
    .attr("class", "grid grid-x")
    .attr("transform", `translate(0, ${size.height})`)
    .call(
      xAxis
        .ticks(races.length - 1)
        .tickSize(-size.height)
        .tickFormat(() => "")
    )
}

export function drawAxis(
  root: d3.Selection<SVGGElement, unknown, null, undefined>,
  xAxis: d3.Axis<number | { valueOf(): number }>,
  yAxis: d3.Axis<number | { valueOf(): number }>,
  races: string[],
  size: ISize
) {
  // Create x axis with race location names
  root
    .append("g")
    .attr("transform", `translate(${10}, ${size.height})`)
    .attr("class", "axis axis-x")
    .call(xAxis.tickSize(0).tickFormat(s => races[s.valueOf()]))

  // Add flags to the x axis
  root
    .select(".axis-x")
    .selectAll(".tick")
    .append("svg:image")
    .data(races)
    .attr("xlink:href", s => `/flags/${s}.svg`)
    .attr("width", 14)
    .attr("height", 10)
    .attr("x", -30)
    .attr("y", 11.5)

  // Create y axis with points count
  root
    .append("g")
    .attr("class", "axis axis-y")
    .call(yAxis.tickSize(0).tickFormat(s => String(s)))
}

export function highlightLines(
  root: d3.Selection<SVGGElement, unknown, null, undefined>,
  data: IDataEntry[],
  hovered: IDataEntry | null
) {
  root
    .select(".line-wrapper")
    .selectAll(".line")
    .data(data)
    .attr("opacity", d => (hovered === null ? 1 : hovered === d ? 1 : 0.2))
}

export function drawLines(
  root: d3.Selection<SVGGElement, unknown, null, undefined>,
  xScale: d3.ScaleLinear<number, number>,
  yScale: d3.ScaleLinear<number, number>,
  data: IDataEntry[]
) {
  // Remove existing lines
  root.select(".line-wrapper").remove()

  // Create wrapper element for lines
  const lineWrapper = root.append("g").attr("class", "line-wrapper")

  // Create function to calculate points locations with
  const createLine = d3
    .line()
    .curve(d3.curveBasis)
    .x(([x]) => xScale(x))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .y(([_, y]) => yScale(y))

  const tooltip = d3.select("div[data-tooltip]")

  for (const result of data) {
    const line = createLine(result.points)

    // Create and draw line
    lineWrapper
      .append("path")
      .attr("class", "line")
      .attr("stroke", result.color)
      .attr("stroke-dasharray", result.dotted ? "11 6" : "initial")
      .attr("d", line || "")

    lineWrapper
      .append("path")
      .attr("stroke-width", 10)
      .attr("stroke", "black")
      .attr("fill", "none")
      .attr("class", "hover-line")
      .attr("d", line || "")
      .attr("opacity", 0)
      .on("mouseenter", () => {
        highlightLines(root, data, result)

        const points = result.points[result.points.length - 1][1]
        const name = result.label.split("<br/>")[0]
        const plural = points === 1 ? "" : "s"

        tooltip
          .style(
            "transform",
            `translate(${d3.event.pageX + 12}px, ${d3.event.pageY - 40}px)`
          )
          .html(`${name} | ${points} point${plural}`)
          .transition()
          .duration(100)
          .style("opacity", 1)
          .style(
            "transform",
            `translate(${d3.event.pageX}px, ${d3.event.pageY - 28}px)`
          )
      })
      .on("mousemove", () => {
        tooltip.style(
          "transform",
          `translate(${d3.event.pageX}px, ${d3.event.pageY - 28}px)`
        )
      })
      .on("mouseleave", () => {
        highlightLines(root, data, null)

        tooltip
          .transition()
          .duration(100)
          .style("opacity", 0)
      })
  }
}

export function drawSvg(svgElement: SVGSVGElement | null, size: ISize) {
  // Update the svg element to be responsive
  const svg = d3
    .select(svgElement)
    .attr("height", size.height)
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr(
      "viewBox",
      `0 0 ${size.width + size.padding * 2} ${size.height + size.padding}`
    )

  // Remove all the pre-existing children
  svg.selectAll("*").remove()

  // Return the root element with padding
  return svg
    .append("g")
    .attr("transform", `translate(${size.padding}, ${size.padding / 4})`)
}
