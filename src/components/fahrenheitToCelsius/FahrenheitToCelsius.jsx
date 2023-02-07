const FahrenheitToCelsius = ({fahrenheit}) => {
    const calculate = (fahrenheit-32)/1.8
    return <h1>{fahrenheit} grados fahrenheit son {calculate} grados centígrados</h1>
}

export default FahrenheitToCelsius