import React from 'react';
import Head from "./layout";
import LayoutStyles from './layout.styled';

const { AppStyle, GlobalStyle, Links } = LayoutStyles;

export default ({children}) => (
    <React className="Fragment">
        <Head>
            <title>Next.js simple Example</title>
        </Head>
        <GlobalStyle/>
        <Links>
            <li>
                <Link href="/aobut-us">
                    <a>About</a>
                </Link>
            </li>
        </Links>
        { children }
    </React>
);
