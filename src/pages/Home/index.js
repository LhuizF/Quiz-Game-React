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
            const response = await axios.get('/themes');
            setThemes(response.data);
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
                        to={`/questions/${theme.path}`}
                        key={theme.id}
                        className="link"
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
