import styled from "styled-components"

export const RowBase = styled.td<{ short: string }>`
  && {
    display: ${p => (p.short === "DOE" ? "none" : "table-cell")};
    padding: 0;
    background: #f7f6f6;
    border-bottom: 2px solid hsla(0, 0%, 0%, 0.12);
  }
`
