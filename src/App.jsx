import SayHello from "./components/sayHello/SayHello"
import CalculateSquareArea from "./components/calculateSquareArea/CalculateSquareArea";
import CalculateTriangleArea from "./components/calculateTriangleArea/CalculateTriangleArea";
import CalculateCircleArea from "./components/calculateCircleArea/CalculateCircleArea";
import CelsiusToFahrenheit from "./components/celsiusToFahrenheit/CelsiusToFahrenheit";
import FahrenheitToCelsius from "./components/fahrenheitToCelsius/FahrenheitToCelsius";

const App = () => {
	return <>
	<SayHello name='Tu nombre'/>
	<CalculateSquareArea side={2}/>
	<CalculateTriangleArea b={2} a={3}/>
	<CalculateCircleArea r={4}/>
	<CelsiusToFahrenheit c={25}/>
	<FahrenheitToCelsius fahrenheit={77}/>
	</>
};

export default App;
