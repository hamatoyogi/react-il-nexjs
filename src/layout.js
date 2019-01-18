import Link from 'next/link';
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
const AppStyle = styled('main')`
  ul {
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
`;

export default ({children}) => (
    <AppStyle>
        <GlobalStyle/>
        <Links>
            <li>
                <Link href="/star-wars-intro">
                    <a>Intro</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/mobx-example">
                    <a>mobx-example</a>
                </Link>
            </li>
            <li>
                <Link href="/sc-example">
                    <a>Styled Components</a>
                </Link>
            </li>
            <li>
                <Link href="/data-fetch">
                    <a>Fetching Data</a>
                </Link>
            </li>
        </Links>
        <div>{children}</div>
    </AppStyle>
);
