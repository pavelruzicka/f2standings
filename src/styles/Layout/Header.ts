import styled from "styled-components"

import { getRule } from "../../util/viewports"

export const HeaderWrapper = styled.header<{ subStyling: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto ${p => (p.subStyling ? 1 : 2.5)}rem;

  @media ${getRule("max", "laptop")} {
    flex-direction: column;
  }

  h3 {
    margin: 0;
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
`

export const ImageWrapper = styled.div`
  width: 60px;
  margin: 1rem 0.5rem;
`
