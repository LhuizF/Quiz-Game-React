import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Themes, QuestionDisplay } from './styled';
import axios from '../../service/axios';
import { ResetUser } from '../../store/Questions/actions';

export default function Home() {
    const dispatch = useDispatch();
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        async function getDate() {
            const { data } = await axios.get('/themes');
            setThemes(data);
        }
        getDate();
        dispatch(ResetUser());
    }, [dispatch]);

    return (
        <>
            <h1>Escolha um tema</h1>
            <Themes>
                {themes.map((theme) => (
                    <Link
                        to={`/Quiz-Game-React/questions/${theme.path}`}
                        key={theme._id}
                    >
                        <QuestionDisplay>
                            <img src={theme.thumbnail} alt="" />
                            <h2>{theme.name}</h2>
                        </QuestionDisplay>
                    </Link>
                ))}
            </Themes>
        </>
    );
}
