import styled from "styled-components"

import { getRule } from "../../util/viewports"

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto 2.5rem;

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
`

export const ImageWrapper = styled.div`
  width: 60px;
  margin: 1rem 0.5rem;
`
