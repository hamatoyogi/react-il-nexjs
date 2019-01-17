import Link from 'next/link';
import styled from 'styled-components';
import StarWarsStyle from '../src/star-wars.styled';

export default () => (
    <StarWarsStyle>
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

                <p>A long time ago in a galaxy far far away...</p>

                <p>Well, actually, it was only two years ago...</p>
                <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…</p>
            </div>
        </section>
    </StarWarsStyle>
);
