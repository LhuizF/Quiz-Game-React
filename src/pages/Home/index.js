import React from 'react';

import { Themes } from './styled';

export default function Home() {
    return (
        <>
            <h1>Escolha um tema</h1>
            <Themes>
                <div className="theme-display">
                    <img
                        src="https://uploaddeimagens.com.br/images/003/449/169/original/math-display.jpg"
                        alt=""
                    />
                    <h2>Matematica</h2>
                </div>

                <div className="theme-display">
                    <img
                        src="https://uploaddeimagens.com.br/images/003/449/171/original/theater-display.jpg"
                        alt=""
                    />
                    <h2>Cinema</h2>
                </div>

                <div className="theme-display">
                    <img
                        src="https://uploaddeimagens.com.br/images/003/449/168/full/art-display.png"
                        alt=""
                    />
                    <h2>Arte</h2>
                </div>

                <div className="theme-display">
                    <img
                        src="https://uploaddeimagens.com.br/images/003/449/167/original/anime-display.jpg"
                        alt=""
                    />
                    <h2>Anime</h2>
                </div>
            </Themes>
        </>
    );
}
