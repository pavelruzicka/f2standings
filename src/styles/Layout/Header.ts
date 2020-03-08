import styled from "styled-components"

import { getRule } from "../../util/viewports"

export const HeaderWrapper = styled.header<{ subStyling: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto ${p => (p.subStyling ? 1 : 2.5)}rem;

  h3 {
    margin: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  link {
    display: flex;
    text-decoration: none;
  }

  > div {
    @media ${getRule("max", "laptop")} {
      margin: 0 ${p => (p.subStyling ? 0 : "auto")} 0 auto;
    }

    @media ${getRule("min", "laptop")} {
      margin-left: auto;
    }
  }

  @media ${getRule("max", "laptop")} {
    flex-flow: column nowrap;
  }
`

export const ImageWrapper = styled.div`
  width: 60px;
  margin: 1rem 0.5rem;

  svg {
    vertical-align: middle;
  }
`

export const YearWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-left: 10px;

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
    opacity: 0.4;
    margin: 0 5px;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Bullet = styled.span`
  &:before {
    content: "—";
    color: rgba(0, 0, 0, 0.7);
    opacity: 0.4;
  }
`
