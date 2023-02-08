const TotalPrice  = ({precio}) => {
    const calculate = (precio+precio*0.21)
    return <h1>El precio total es {precio} euros</h1>
}

export default TotalPrice