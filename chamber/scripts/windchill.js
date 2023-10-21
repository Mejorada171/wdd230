function calculateWindChill() {
    const temperatureInput = document.getElementById("temperature");
    const windspeedInput = document.getElementById("windspeed");
    const windChillValue = document.getElementById("windChillValue");

    const temperature = parseFloat(temperatureInput.value);
    const windspeed = parseFloat(windspeedInput.value);

    if (temperature <= 50 && windspeed > 3.0) {
        // Calculate wind chill using the formula
        const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16));
        windChillValue.textContent = windChill.toFixed(2) + " °F";
    } else {
        windChillValue.textContent = "N/A";
    }
}