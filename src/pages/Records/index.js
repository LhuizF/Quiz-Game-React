import React, { useEffect, useState } from 'react';

import { TableContainer } from './styled';
import axios from '../../service/axios';
import Loading from '../../components/Loading';

export default function Records() {
    const [records, setRecords] = useState([]);
    const [themes, setThemes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getRecords() {
            setIsLoading(true);
            const response = await axios.get('/themes');
            const { data } = await axios.get('/records');
            setThemes(response.data);
            setRecords(data);
            setIsLoading(false);
        }
        getRecords();
    }, []);

    const handleThemeFilter = async (value) => {
        if (!value) {
            const { data } = await axios.get(`/records`);
            setRecords(data);
            return;
        }
        const { data } = await axios.get(`/records/${value}`);
        setRecords(data);
    };

    return (
        <>
            <h1>Recordes</h1>
            <Loading isLoading={isLoading} />
            <TableContainer>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Nome</th>
                        <th>
                            Tema
                            <select
                                onClick={(e) =>
                                    handleThemeFilter(e.target.value)
                                }
                            >
                                <option value="">Todos</option>
                                {themes.map((theme) => {
                                    return (
                                        <option
                                            key={theme._id}
                                            value={theme.path}
                                        >
                                            {theme.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </th>
                        <th>Acertos</th>
                        <th>Tempo</th>
                        <th>Pontuação</th>
                        <th>Data/Hora</th>
                    </tr>
                </thead>
                {records.map((record, i) => (
                    <tbody key={record._id}>
                        <tr>
                            <td className={`ptn-${i + 1}`}>{`${i + 1}°`}</td>
                            <td>{record.nick}</td>
                            <td>{record.theme[1]}</td>
                            <td>{record.hits}</td>
                            <td>{record.time}</td>
                            <td>{record.score}</td>
                            <td>{record.date}</td>
                        </tr>
                    </tbody>
                ))}
            </TableContainer>
        </>
    );
}
