import {createGlobalStyle} from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
const AppStyle = styled('main')`
  margin: 75px;
  ul:not('.sw-data') {
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
  }
`;

const Links = styled('ul')`
    list-style: none;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export default {
    Links,
    AppStyle,
    GlobalStyle
}
