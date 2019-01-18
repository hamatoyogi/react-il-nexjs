import styled from 'styled-components';
import StarWarsStyle from '../src/star-wars.styled';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`


export default () => (
    <StarWarsStyle>
        <GlobalStyle />
        <div className="fade"></div>
        <audio src="/static/StarWarsTheme.mp3" autoPlay>
            <p>If you are reading this, it is because your browser does not support the audio element.</p>
        </audio>
        <section className="star-wars">
            <div className="crawl">
                <div className="title">
                    <p>Next.js</p>
                    <h1>A New Hope</h1>
                </div>

                <p>A long long time ago in a galaxy far far away...</p>

                <p>Well, actually, it was more like around two years ago...</p>

                <p>It is a period of civil war.
                    Rebel coders, striking
                    from a hidden base in TLV,
                    have won their first victory
                    against the evil Galactic
                    Empire, and stabalized
                    the front end.
                </p>
                <p>
                    During the battle, Rebel
                    spies managed to steal secret
                    plans to the Empire's
                    ultimate weapon, the Next.js
                    an armored React Framework
                    with enough power to
                    render applications on the server
                    side and work seamlessly on all
                    platforms.
                </p>
                <p>Pursued by the Empire's
                    sinister Product Managers,
                    Hamato Yogi races home aboard his
                    laptop, custodian of the
                    stolen plans that can save
                    his people and restore
                    speed to the website.....</p>
            </div>
        </section>
    </StarWarsStyle>
);
