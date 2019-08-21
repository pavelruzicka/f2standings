import styled from "styled-components"

export const Tooltip = styled.div`
  color: white;
  position: absolute;
  text-align: left;
  padding: 0.1rem 0.5rem;
  font-size: 16px;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.8);
  pointer-events: none;
  opacity: 0;
  left: 0;
  top: 0;
  transition: transform 0.1s;
`
