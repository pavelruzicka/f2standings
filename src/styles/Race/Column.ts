import styled from "styled-components"
import { getRule } from "../../util/viewports"

export const RaceColumnWrapper = styled.td<{ mobile: boolean | null }>`
  @media ${getRule("min", "mobileL")} {
    && {
      display: ${p => (p.mobile === null || !p.mobile ? `table-cell` : `none`)};
    }
  }

  @media ${getRule("max", "mobileL")} {
    && {
      display: ${p => (p.mobile === null || p.mobile ? `flex` : `none`)};
      justify-content: space-between;
      border-bottom: none;
      padding: 4px 6px;
    }
  }
`

export const Driver = styled.div`
  font-weight: 500;
`

export const ColumnDriver = styled(Driver)`
  position: relative;

  @media ${getRule("max", "mobileL")} {
    margin-bottom: 4px;
  }
`
