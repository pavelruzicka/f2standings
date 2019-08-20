import styled from "styled-components"

export const LineChartSvg = styled.svg`
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
