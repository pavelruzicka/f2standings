import styled from "styled-components"

export const LineChartSvg = styled.svg`
  width: 100%;
  height: auto;

  text {
    font-family: "Red Hat Display", sans-serif;
  }

  .legend circle {
    stroke-width: 2;
  }

  .legend text {
    font-weight: 500;
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
    font-weight: 500;
    transform: translateX(-10px);
  }

  .axis-x .tick text {
    font-weight: 700;
    transform: translateY(10px);
  }

  .domain {
    display: none;
  }
`
