import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Themes, QuestionDisplay } from './styled';
import axios from '../../service/axios';

export default function Home() {
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        async function getDate() {
            const response = await axios.get('/themes');
            setThemes(response.data);
        }
        getDate();
    }, []);

    return (
        <>
            <h1>Escolha um tema</h1>
            <Themes>
                {themes.map((theme) => (
                    <Link to={`/questions/${theme.path}`} key={theme.id}>
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
