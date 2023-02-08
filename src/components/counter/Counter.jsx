import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)
    return(
        <>
        <button onClick={() =>decrement(count, setCount)}>Decrement</button>
        <h2>{count}</h2>
        <button onClick={() =>increment(count, setCount)}>Increment</button>
        </>
    )
}

const increment= (count, setCount) => {
    if(count >= 10) setCount(0)
    else setCount(count + 1)
    
}

const decrement = (count, setCount) => {
    if(count <=0)setCount(10)
    else setCount(count -1)
    
}

export default Counter