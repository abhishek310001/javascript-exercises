const convertToCelsius = function(temp) {
  let cels = 0;
  cels = Math.round((((temp-32)*5)/9)*10)/10;
  return cels;
};

const convertToFahrenheit = function(temp) {
  let fahr = 0;
  fahr = Math.round((((temp/5)*9)+32)*10)/10;
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
