import React, { useState } from 'react';

function MyButton() {
    const [clicks, setClicks] = useState(0);

    return ( <button onClick={() => setClicks(clicks + 1)} >
        count is [{clicks}]</button> ); }

export default MyButton;