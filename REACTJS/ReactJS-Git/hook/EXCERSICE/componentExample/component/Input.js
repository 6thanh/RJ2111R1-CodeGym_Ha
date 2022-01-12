import { useState, useEffect } from "react";

const InputHello = () => {
    const [value,setValue] = useState('');
    
    return (
        <div>
            <input type={'text'} onChange={(e) => setValue(e.target.value)}></input>
            <p>Hello: {value}</p>
        </div>
    )
};

export default InputHello;