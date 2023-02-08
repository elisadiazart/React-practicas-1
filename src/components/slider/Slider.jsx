import { useState } from "react";
import Title from "../title/title";
import Subtitle from "../subtitle/Subtitle";

const INFO = [
    {
      title: 'Title 1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '
    },
     {
      title: 'Title 2',
      description: 'Cumque libero quos accusantium deleniti vitae odio. '
    },
    {
      title: 'Title 3',
      description: 'doloribus voluptatibus in ducimus ad qui. '
    },
    {
      title: 'Title 4',
      description: 'eius nobis delectus dolorum. '
    },
    {
      title: 'Title 5',
      description: 'quas explicabo inventore! Minima, iure. '
    }
];


const Slider = () => {
    const [count, setCount] = useState(0)
    return(
        <>
        <button onClick={() =>decrement(count, setCount)}>Previuos</button>
        <Title content={INFO[count].title}/>
        <Subtitle content={INFO[count].description}/>
        <button onClick={() =>increment(count, setCount)}>Next</button>
        </>
    )
}

const decrement = (count, setCount) => {
    if(count=== 0)setCount(INFO.length-1)
    else setCount(count - 1)
}

const increment = (count, setCount) => {
    if(count === INFO.length -1 )setCount(0)
    else setCount(count + 1)
}


export default Slider

