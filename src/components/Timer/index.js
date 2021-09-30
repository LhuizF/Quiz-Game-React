import React, { useState, useEffect } from 'react';

export default function Timer() {
    const [timer, setTimer] = useState('00:00:00');
    const time = (seg) => new Date(seg * 1000).toISOString().substr(11, 8);
    let seg = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            // eslint-disable-next-line
            seg ++;
            setTimer(time(seg));
        }, 1000);

        return () => clearInterval(interval);
    }, [seg]);

    return timer;
}
