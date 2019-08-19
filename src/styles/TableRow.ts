import styled from "styled-components"

import { getRule } from "../util/viewports"

export const RowInit = styled.td`
  color: black;
  text-align: right;

  @media ${getRule("max", "mobileL")} {
    && {
      display: none;
    }
  }
`

export const RowInitMobile = styled.td`
  && {
    font-weight: 500;
    text-align: left;
    padding: 4px 6px;
  }

  @media ${getRule("min", "mobileL")} {
    display: none;
  }

  @media ${getRule("max", "mobileL")} {
    && {
      display: flex;
      justify-content: space-between;
      border-bottom: none;
    }
  }
`

export const RowInitVert = styled(RowInit)`
  && {
    vertical-align: middle;
  }

  @media ${getRule("max", "mobileL")} {
    && {
      display: none;
    }
  }
`

export const RowVert = styled.td`
  && {
    vertical-align: middle;
  }

  @media ${getRule("max", "mobileL")} {
    && {
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      padding: 16px 4px 6px;
      border-bottom: none;
      border-top: 2px solid hsla(0, 0%, 0%, 0.12);
    }
  }
`

export const RowBlock = styled.td`
  && {
    text-align: center;
    vertical-align: middle;
  }

  @media ${getRule("max", "mobileL")} {
    && {
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      padding: 4px 6px;
      border-bottom: none;
    }
  }
`

export const RowStart = styled(RowBlock)`
  && {
    text-align: left;
  }

  @media ${getRule("max", "mobileL")} {
    && {
      display: flex;
      justify-content: space-between;
      padding: 16px 6px 4px;
      margin-top: 1rem;
      border-bottom: none;
      border-top: 2px solid hsla(0, 0%, 0%, 0.12);
    }
  }
`

export const RowStartVert = styled(RowStart)`
  @media ${getRule("min", "mobileL")} {
    && {
      vertical-align: middle;
    }
  }
`

export const RowEnd = styled(RowBlock)`
  @media ${getRule("max", "mobileL")} {
    && {
      padding: 4px 6px 16px;
      border-bottom: 2px solid hsla(0, 0%, 0%, 0.12);
    }
  }
`

export const RowWrapper = styled.tr`
  @media ${getRule("max", "mobileL")} {
    display: block;

    & > * {
      display: block;
    }
  }
`

export const RowWrapperClickable = styled(RowWrapper)`
  cursor: pointer;

  &:hover {
    background-color: #eff2f7;
  }
`

export const Team = styled.td`
  font-weight: 500;

  @media ${getRule("max", "mobileL")} {
    && {
      display: flex;
      justify-content: space-between;
      padding: 4px 6px;
      border-bottom: none;
    }
  }
`
