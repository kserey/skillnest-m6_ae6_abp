const convertTemperature = (temp, unit) => {
    const lowerUnit = unit.toLowerCase();
    let convertedTemp;
    let convertedUnit;

    if (lowerUnit === 'c') {
        // CELSIUS A FAHRENHEIT: (C * 9/5) + 32
        convertedTemp = (temp * 9/5) + 32;
        convertedUnit = 'F';
    } else if (lowerUnit === 'f') {
        // FAHRENHEIT A CELSIUS: (F - 32) * 5/9
        convertedTemp = (temp - 32) * 5/9;
        convertedUnit = 'C';
    } else {
        throw new Error('Unidad de temperatura no válida. Use "c" para Celsius o "f" para Fahrenheit.');
    }

    return {
        temp: parseFloat(convertedTemp.toFixed(2)),
        unit: convertedUnit
    };
};

module.exports = {
    convertTemperature
};