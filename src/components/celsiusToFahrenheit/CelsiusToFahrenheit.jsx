const CelsiusToFahrenheit  = ({c}) => {
    const calculate = (c*1.8 +32)
    return <h1>{c} grados centígrados son {calculate} grados fahrenheit</h1>
}

export default CelsiusToFahrenheit