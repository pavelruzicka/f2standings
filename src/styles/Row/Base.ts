import styled from "styled-components"
import { TableItem } from "../Layout/Table"

export const RowBase = styled(TableItem)<{ short: string }>`
  display: ${p => (p.short === "DOE" ? "none" : "table-cell")};
  padding: 0;
  background: #f3f2f2;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
`
