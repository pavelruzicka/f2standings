import styled from "styled-components"

export const IconElement = styled.img<{ size: number }>`
  bottom: 2px;
  margin: 0;
  position: relative;
  vertical-align: middle;
  opacity: 0.7;
  width: ${p => p.size}px;
`
