import React, { useEffect, useState } from 'react';

import { RecordContainer } from './styled';
import axios from '../../service/axios';

export default function Records() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        async function getRecords() {
            const response = await axios.get('/records');
            setRecords(response.data);
        }
        getRecords();
    }, []);

    records.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        }
        return -1;
    });

    return (
        <>
            <h1>Recordes</h1>
            <RecordContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Tema</th>
                            <th>Acertos</th>
                            <th>Tempo</th>
                            <th>Pontuação</th>
                            <th>Data/Hora</th>
                        </tr>
                    </thead>
                    {records.map((record) => (
                        <tbody key={record.id}>
                            <tr>
                                <td>{record.nick}</td>
                                <td>{record.theme}</td>
                                <td>{record.hits}</td>
                                <td>{record.time}</td>
                                <td>{record.score}</td>
                                <td>{record.date}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </RecordContainer>
        </>
    );
}
