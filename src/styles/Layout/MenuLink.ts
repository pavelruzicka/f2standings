import styled from "styled-components"
import { Link } from "gatsby"

export const MenuLink = styled(Link)`
  color: #000;
  font-weight: bold;
  margin: 0 0.75rem;
  opacity: 0.35;
  text-decoration: none;
`

export const SubMenuLink = styled(MenuLink)`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
`
