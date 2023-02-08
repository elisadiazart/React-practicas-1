import { useState } from "react"


const InputToText = () => {
    const [text, setText] = useState('')
    return (
    <>
        <h2>{text}</h2>
        <input value={text} type="text" onChange={(e) => printText(e.target.value,setText)}/>
    </>
    )
}

const printText = (text, setText) => {
    if(text === 'reset'){
        setText('')
    }
    else setText(text);
}


export default InputToText