import Link from 'next/link';
import Head from 'next/head'

import LayoutStyle from '../src/layout.styled';

const { Links, GlobalStyle, AppStyle } = LayoutStyle;

export default ({children}) => (
    <AppStyle>
        <Head>
            <title>Next.js Example</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <GlobalStyle/>
        <Links>
            <li>
                <Link href="/simple-layout">
                    <a>Simple Layout</a>
                </Link>
            </li>
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
