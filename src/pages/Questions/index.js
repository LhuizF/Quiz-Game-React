import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { MainQuestion } from './styled';
import Start from '../../components/Start';
import Scoreboard from '../../components/Scoreboard';
import NextButton from '../../components/NextButton';
import axios from '../../service/axios';

export default function Questions({ match, history }) {
    const { theme } = match.params;
    const { nick } = useSelector((state) => state.user);

    const [themeName, setThemeName] = useState('');
    const [themeId, setThemeId] = useState('');

    useEffect(() => {
        async function getDate() {
            const { data } = await axios.get(`/themes/${theme}`);
            setThemeId(data[0]._id);
            setThemeName(data[0].name);
        }
        getDate();
    }, [theme]);

    if (!nick) {
        return <Start themeId={themeId} history={history} />;
    }

    return (
        <MainQuestion>
            <h1>{themeName}</h1>
            <Scoreboard user={nick} />
            <NextButton history={history} theme={[theme, themeName]} />
        </MainQuestion>
    );
}
