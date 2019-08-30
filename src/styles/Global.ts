import styled, { createGlobalStyle } from "styled-components"
import normalize from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 112.5%;
    line-height: 1.45em;
  }

  body {
    font-family: 'Red Hat Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgba(0, 0, 0, 0.8);
    font-kerning: normal;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    word-wrap: break-word;
    background-color: #f9f9f9;
  }
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: content-box;
`

export const Abbr = styled.abbr`
  font-size: 85%;
  cursor: help;
  text-decoration: none !important;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.5) !important;
`
