import React, {useState} from 'react';

const Counter = ()=>{
    const [number, setNumber] = useState(0);
    return(
        <div>
            <p>count is {number}</p>
            <div>
                <button onClick = {()=>{
                    setNumber(number + 1)
                }}>increase</button>
                <button onClick = {()=>{
                    if(number !== 0){
                        setNumber(number - 1)
                    }
                }}>decrease</button>
            </div>
        </div>
    )
}

export default Counter;