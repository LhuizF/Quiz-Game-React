import React, { useEffect, useState } from 'react';

import { TableContainer } from './styled';
import axios from '../../service/axios';

export default function Records() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        async function getRecords() {
            const { data } = await axios.get('/records');
            setRecords(data);
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
                                <option value="math">Matemática</option>
                                <option value="movie-theater">Cinema</option>
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
