import React from 'react';

export default function Timer() {
    const time = new Date().toLocaleTimeString();
    const [timer, setTimer] = React.useState(time);

    return <p>{timer}</p>;
}
