import { useState } from "react";

function Example (){
    let [count, setCount] = useState(0);
    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    }
    return (
        <div>
            <h1>Giá: {count}</h1>
            <button onClick={handleClick}>Tăng</button>
        </div>
    )
}

export default Example;