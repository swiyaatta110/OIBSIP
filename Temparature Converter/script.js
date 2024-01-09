function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const conversionType = document.getElementById('conversionType').value;
    let result = '';
  
    if (isNaN(temperatureInput)) {
      result = 'Invalid input';
    } else {
      switch (conversionType) {
        case 'fahrenheitToCelsius':
          result = `${((temperatureInput - 32) * 5 / 9).toFixed(2)}°C`;
          break;
        case 'celsiusToFahrenheit':
          result = `${((temperatureInput * 9 / 5) + 32).toFixed(2)}°F`;
          break;
        case 'fahrenheitToKelvin':
          result = `${(((temperatureInput - 32) * 5 / 9) + 273.15).toFixed(2)}K`;
          break;
        case 'kelvinToFahrenheit':
          result = `${(((temperatureInput - 273.15) * 9 / 5) + 32).toFixed(2)}°F`;
          break;
        case 'celsiusToKelvin':
          result = `${(temperatureInput + 273.15).toFixed(2)}K`;
          break;
        case 'kelvinToCelsius':
          result = `${(temperatureInput - 273.15).toFixed(2)}°C`;
          break;
        default:
          result = 'Invalid conversion type';
          break;
      }
    }
  
    document.getElementById('result').textContent = result;
}