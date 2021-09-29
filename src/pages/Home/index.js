import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Themes, QuestionDisplay } from './styled';
import * as actions from '../../store/Questions/actions';

import Timer from '../../components/Timer';

export default function Home() {
    return (
        <>
            <Timer />
            <h1>Escolha um tema</h1>
            <Themes>
                <Link to="/questions/math">
                    <QuestionDisplay>
                        <img
                            src="https://uploaddeimagens.com.br/images/003/449/169/original/math-display.jpg"
                            alt=""
                        />
                        <h2>Matemática</h2>
                    </QuestionDisplay>
                </Link>
                <Link to="/questions/movie-theater">
                    <QuestionDisplay>
                        <img
                            src="https://uploaddeimagens.com.br/images/003/449/171/original/theater-display.jpg"
                            alt=""
                        />
                        <h2>Cinema</h2>
                    </QuestionDisplay>
                </Link>
                <Link to="/questions/art">
                    <QuestionDisplay>
                        <img
                            src="https://uploaddeimagens.com.br/images/003/449/168/full/art-display.png"
                            alt=""
                        />
                        <h2>Arte</h2>
                    </QuestionDisplay>
                </Link>
                <Link to="/questions/anime">
                    <QuestionDisplay>
                        <img
                            src="https://uploaddeimagens.com.br/images/003/449/167/original/anime-display.jpg"
                            alt=""
                        />
                        <h2>Anime</h2>
                    </QuestionDisplay>
                </Link>
            </Themes>
        </>
    );
}
