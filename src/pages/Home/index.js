import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Themes, QuestionDisplay } from './styled';
import axios from '../../service/axios';
import { ResetUser } from '../../store/User/actions';
import Loading from '../../components/Loading';

export default function Home() {
    const dispatch = useDispatch();
    const [themes, setThemes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getDate() {
            setIsLoading(true);
            const { data } = await axios.get('/themes');
            setThemes(data);
            setIsLoading(false);
        }
        getDate();
        dispatch(ResetUser());
    }, [dispatch]);

    return (
        <>
            <h1>Escolha um tema</h1>
            <Loading isLoading={isLoading} />
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
