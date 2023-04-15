var convertTemperature = function(celsius) {
    const kelvin = (celsius + 273.15).toFixed(5);
    const fahrenheit = (celsius * 1.80 + 32.00).toFixed(5);
    return [Number(kelvin), Number(fahrenheit)];
};

const celsius = 36.50;
const convertedTemp = convertTemperature(celsius); 