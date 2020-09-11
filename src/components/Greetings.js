import React from 'react';
import GreetingsTwo from './ClassGreeting';
import Counter from './Counter';

const Greetings = (props)=>{
    return(
        <div>
            <h1>hey!! my name is {props.name}</h1>
            <GreetingsTwo class = '300lvl'/>
            <Counter />
        </div>
    )
}
export default Greetings